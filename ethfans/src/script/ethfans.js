
const Ethfans = (($) => {

  $(document).on('ready', () => {
    let $navbar = $('#navbar')
    let $navbarIconSearch = $navbar.find('.icon-search')
    let $navbarSearch = $navbar.find('.search')

    let $banners = $('#recommend-banners')
    let $hotBannerItem = $banners.find('.hot-banner').children('.item')

    $navbarIconSearch.on('click', function() {
      $navbar.addClass('search-focus')
      $navbarSearch.focus()
    })

    $navbarSearch.on('focusout', function() {
      $navbar.removeClass('search-focus')
    })

    $hotBannerItem.hover(function() {
      $hotBannerItem.removeClass('hover')
      $(this).addClass('hover')
    })

    let kudo = $('.kudo')

    // initialize the kudoer
    kudo.kudo()

    // bind to events on the kudos
    kudo.on('kudo:added', function(event) {
      var element = $(this)
      var id = element.data('id')

      // send the data to your server...
      console.log("Kudod", element)
    })
  })

})(jQuery)

export default Ethfans
