
const Kudo = (($) => {

  const NAME = 'kudo'

  class Kudo {

    constructor(element) {
      this._element = element
      this._element.data('kudoable', this)
      this.counter  = $('.count .num', this._element)
      this.timer    = null

      this.start    = $.proxy(this.start, this)
      this.end      = $.proxy(this.end, this)
      this.stop     = $.proxy(this.stop, this)
      this.complete = $.proxy(this.complete, this)

      this.bindEvents()
    }

    bindEvents() {
      this._element.on('mouseenter', this.start)
      this._element.on('mouseleave', this.end)
      this._element.on('click', this.stop)
      this._element.on('touchstart', this.start)
      this._element.on('touchend', this.end)
    }

    start() {
      if (this._isKudoable() && !this._isComplete()) {
        this._element.trigger('kudo:active')
        this._element.addClass('active')

        return this.timer = setTimeout(this.complete, 700)
      }
    }

    end() {
      if (this._isKudoable() && !this._isComplete()) {
        this._element.trigger('kudo:inactive')
        this._element.removeClass('active')

        if (this.timer != null) {
          return clearTimeout(this.timer)
        }
      }
    }

    stop(e) {
      e.preventDefault()

      if (this._isComplete()) {
        this.decrementCount()
        this._element.trigger('kudo:removed')
        this._element.removeClass('complete')
      }
    }

    complete() {
      this.end()
      this.incrementCount()
      this._element.trigger('kudo:added')
      this._element.addClass('complete')
    }

    setCount(count) {
      console.log(count)
      this.counter.html(count)
    }

    currentCount() {
      return parseInt(this.counter.html())
    }

    incrementCount() {
      this.setCount(this.currentCount() + 1)
    }

    decrementCount() {
      this.setCount(this.currentCount() - 1)
    }

    // private

    _isKudoable() {
      return this._element.hasClass('kudoable')
    }

    _isComplete() {
      return this._element.hasClass('complete')
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function() {
        return new Kudo($(this))
      })
    }
  }

  $.fn[NAME] = Kudo._jQueryInterface

  return Kudo

})(jQuery)

export default Kudo
