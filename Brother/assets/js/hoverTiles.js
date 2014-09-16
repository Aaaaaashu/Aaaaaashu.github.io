(function() {
  function hoverTiles() {
    var
      tiles              = $('#benefits-tiles'),
      tile               = $('#benefits-tiles li'),
      text               = $('#benefits-tiles small.tile-description')
      activeTile         = $('#benefits-tiles li.active'),
      activeText         = $('#benefits-tiles li.active small.tile-description'),
      activeTileHeight   = activeTile.outerHeight(true),
      activeTextWidth    = activeText.width();

      tiles.height(activeTileHeight);
      text.width(activeTextWidth);

      tile.hover(function() {
        tile.addClass('inactive');
        tile.removeClass('active');
        $(this).addClass('active');
      }, function(){
        //tile.removeClass('active');
        //tile.removeClass('inactive');
      })
  }

  $(document).ready(function() {
    hoverTiles();
  })

})();
