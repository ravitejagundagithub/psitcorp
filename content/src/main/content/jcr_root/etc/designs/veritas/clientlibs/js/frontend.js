$(document).ready(function() {
  navigationMenu();
  dropMenu();
  resultsDisplayStyle();
  expandingPreview();
});

function navigationMenu() {
  $('body').addClass('js');
  var $menu = $('#menu'),
      $menulink = $('.menu-link'),
      $menuTrigger = $('.has-submenu > a'),
      $menuItem = $(".menu > li > a"),
      $currentItem = $('.current-item'),
      $subNavMenu = $('.sub-menu');
  
  $menulink.click(function (e) {
    $('body').toggleClass('active');
    e.preventDefault();
  });
  
  var showSubmenus = function() {
    if ($menulink.is(':visible')){ // If it's the hamburger menu
      $menuTrigger.click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('li').siblings().find('a').removeClass('active').next('.sub-menu').removeClass('active');
        $this.toggleClass('active').siblings('.sub-menu').toggleClass('active');
      });
    }
  }
  showSubmenus();
    $(window).bind('resize', showSubmenus); 
}

function dropMenu() {
  $('.drop-trigger').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $this.toggleClass('active');
    $this.next().toggle().toggleClass('active');
  });
}

function resultsDisplayStyle() { 
  var $cardGroup = $('.card-group'),
      $listView =  $('#list-view-toggle'),
      $gridView =  $('#grid-view-toggle'),
      $this = $(this);
  
  // IE8 doesn't like radio buttons' ":checked" pseudo class, so we have to add a "checked" class
  $('#list-view-toggle').click(function(e) {
    $gridView.removeClass('checked');  
    $this.addClass('checked');
    $cardGroup.removeClass('card-grid-display').addClass('card-list-display');
  });
  $('#grid-view-toggle').click(function(e) {
    $listView.removeClass('checked');  
    $this.addClass('checked');
    $cardGroup.removeClass('card-list-display').addClass('card-grid-display');
  });
}

function expandingPreview() {
  $(function() {

      // Call Gridder
      $('.gridder').gridderExpander({
          scroll: true,
          scrollOffset: 30,
          scrollTo: "listitem", // panel or listitem
          animationSpeed: 400,
          animationEasing: "easeInOutExpo",
          onStart: function(){
              console.log("Gridder Inititialized");
          },
          onContent: function(){
              console.log("Gridder Content Loaded");
          },
          onClosed: function(){
              console.log("Gridder Closed");
          }
      });

  });
}
