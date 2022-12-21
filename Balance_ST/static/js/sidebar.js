$(document).ready(function(){
  $("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
    if ($(this).hasClass("light")){
      $(this).removeClass("light");
      $(this).addClass("dark");
    } else {
      $(this).removeClass("dark");
      $(this).addClass("light");
    }
//    if ($(this).css('color') == '#e11d25' || 'rgb(225, 29, 37)'){
//      $(this).css('color', 'black');
//    }else{
//      $(this).css('color', '#e11d25');
//    }
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
    if ($("#menu-toggle").hasClass("light")){
      $("#menu-toggle").removeClass("light");
      $("#menu-toggle").addClass("dark");
    } else {
      $("#menu-toggle").removeClass("dark");
      $("#menu-toggle").addClass("light");
    }
    // get a handle on the target element of the clicked link
    var $target = $($(this).attr('href'));
    // manually scroll the window vertically to the correct
    // offset to nicely display the target element at the top
    $(window).scrollTop($target.offset().top-(scrollTopOffset));
});