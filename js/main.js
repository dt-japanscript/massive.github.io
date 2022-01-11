// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.portfolio').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows',
  });

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// venobox
new VenoBox({
  selector: '.venobox'
});

// Header scroll handling
window.onscroll = function(){
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    // document.getElementById("headerTop").style.transform = "translate(-50%,0)";
  }
}