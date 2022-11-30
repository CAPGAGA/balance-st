$(document).ready(function(){
  $("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
  });
});

var scrollTopOffset = $('#wrapper').outerHeight() + 60;

//$(document).ready(function(){
//  document.getElementById("sidebarnav").addEventListener("click", function(e) {
//    e.preventDefault();
//    $("#wrapper").toggleClass("menuDisplayed");
//    console.log($($(this).attr('href')));
//    var $target = $($(this).attr('href'));
//    $(window).scrollTop($target);
//  });
//});

$('.sidebar-nav li a').on('click', function(evt){
    // stop the default browser behaviour for the click
    // on the sidebar navigation link
    evt.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
    // get a handle on the target element of the clicked link
    var $target = $($(this).attr('href'));
    // manually scroll the window vertically to the correct
    // offset to nicely display the target element at the top
    $(window).scrollTop($target.offset().top-(scrollTopOffset));
});