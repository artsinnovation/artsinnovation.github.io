/*!
 * custom v1.0.0
 * Copyright 2018 Syed Irtaza
 */

$(document).ready(function(){

  function lineAnimation(arg) {
      TweenLite.to(arg+" .under-line", 1, {width:"90", ease:Power2.easeInOut});
  }

if ($('#about-section').length != 0) {
  var underline = new Waypoint({
    element: document.getElementById('about-section'),
    handler: function(direction) {
      lineAnimation("#about-section");
    },
    offset: "50%"
  });
}

if ($('#service-section').length != 0) {
  var underline = new Waypoint({
    element: document.getElementById('service-section'),
    handler: function(direction) {
      lineAnimation("#service-section");
    },
    offset: "50%"
  });
}

if ($('#pricing-section').length != 0) {
  var underline = new Waypoint({
    element: document.getElementById('pricing-section'),
    handler: function(direction) {
      lineAnimation("#pricing-section");
    },
    offset: "50%"
  });
}

if ($('#members-section').length != 0) {
  var underline = new Waypoint({
    element: document.getElementById('members-section'),
    handler: function(direction) {
      lineAnimation("#members-section");
    },
    offset: "50%"
  });
}

if ($('#portfolio-section').length != 0) {
  var underline = new Waypoint({
    element: document.getElementById('portfolio-section'),
    handler: function(direction) {
      lineAnimation("#portfolio-section");
    },
    offset: "50%"
  });
}

if ($('#services-page-section').length != 0) {
  var underline = new Waypoint({
    element: document.getElementById('ser1'),
    handler: function(direction) {
      lineAnimation("#ser1");
      $('#logo-icon').addClass('rotateOrigin');
      $('#seo-rocket').addClass('bounce-rocket');
    },
    offset: "50%"
  });

  if ($('#ser2').length != 0) {
    var underline = new Waypoint({
      element: document.getElementById('ser2'),
      handler: function(direction) {
        lineAnimation("#ser2");
        $('#layout-line').addClass('path');
      },
      offset: "50%"
    });
  }

  if ($('#ser3').length != 0) {
    var underline = new Waypoint({
      element: document.getElementById('ser3'),
      handler: function(direction) {
        lineAnimation("#ser3");
        $('#board').addClass('animated fadeInUp');
        $('#paper').addClass('animated fadeInLeft');
        $('#redClip').addClass('animated fadeInDown');
        $('#st-line1').addClass('animated fadeInRight');
        $('#st-line2').addClass('animated fadeInLeft');
        $('#st-line3').addClass('animated fadeInRight');
        $('#st-line4').addClass('animated fadeInUp');
      },
      offset: "50%"
    });
  }


  if ($('#ser4').length != 0) {
    var underline = new Waypoint({
      element: document.getElementById('ser4'),
      handler: function(direction) {
        lineAnimation("#ser4");
        $('#pen').addClass('penTrace');
      },
      offset: "50%"
    });
  }

}

//  Underline Animation Ends

if ($('#home-section').length != 0) {
  var waypointHome = new Waypoint({
    element: document.getElementById('home-section'),
    handler: function(direction) {
      if (direction == "down") {
        $('#TL').removeClass('cloud-TL');
        $('#TR').removeClass('cloud-TR');
        $('#BL').removeClass('cloud-BL');
        $('#BR').removeClass('cloud-BR');
        $('#exhaust-id').removeClass('exhaust-flame');

      }else {
        $('#TL').addClass('cloud-TL');
        $('#TR').addClass('cloud-TR');
        $('#BL').addClass('cloud-BL');
        $('#BR').addClass('cloud-BR');
        $('#exhaust-id').addClass('exhaust-flame');
        $('#TL').css('animation-delay', '0.5s');
        $('#TR').css('animation-delay', '0.5s');
        $('#BL').css('animation-delay', '0.5s');
        $('#BR').css('animation-delay', '0.5s');
      }
    },
    offset: function() {
      return -this.element.clientHeight
    }
  });
}

if ($('#mis-R1').length != 0) {
  var mis1 = new Waypoint({
    element: document.getElementById('mis-R1'),
    handler: function(direction) {
      lineAnimation(".msn-divR");
      if (direction == "down") {
        $('#R1').addClass('theme-c1');
        $('#R1').removeClass('theme-c5');
        $('#R2').removeClass('theme-c1');
        $('#R2').addClass('theme-c5');
      }else {
        if ( $('#R1.theme-c1').length == 0 ) {        
          $('#R1').removeClass('theme-c5');
          $('#R1').addClass('theme-c1');
          $('#R2').removeClass('theme-c1');
          $('#R2').addClass('theme-c5');
        }
      }
    },
    offset: "60%"
  });

  var mis11 = new Waypoint({
    element: document.getElementById('mis-R1'),
    handler: function(direction) {
      lineAnimation(".vsn-divR");
      if (direction == "up") {
        if ( $('#R1.theme-c1').length == 0 ) {        
          $('#R1').removeClass('theme-c5');
          $('#R1').addClass('theme-c1');
          $('#R2').removeClass('theme-c1');
          $('#R2').addClass('theme-c5');
        }
      }
    },
    offset: "0%"
  });

  var mis2 = new Waypoint({
    element: document.getElementById('mis-R2'),
    handler: function(direction) {
      if (direction == "down") {
        $('#R1').removeClass('theme-c1');
        $('#R2').removeClass('theme-c5');
        $('#R2').addClass('theme-c1');
        $('#R1').addClass('theme-c5');
      }else {
        if ( $('#R2.theme-c1').length == 0 ) {        
          $('#R1').removeClass('theme-c1');
          $('#R2').removeClass('theme-c5');
          $('#R2').addClass('theme-c1');
          $('#R1').addClass('theme-c5');
        }
      }
    },
    offset: "50%"
  });


  var misClouds = new Waypoint({
    element: document.getElementById('mis-R2'),
    handler: function(direction) {
      $('#mis-flag').addClass('move-flag');
      $('#mis-cloth').addClass('flag-cloth');
      $('#mis-cloud-1').addClass('diagonal-In');
      $('#mis-cloud-2').addClass('diagonal-In');
      $('#white-shadow').addClass('diagonal-In');
      $('#mis-mountians').addClass('move-mountians');
    },
    offset: "50%"
  });


  var misVis = new Waypoint({
    element: document.getElementById('mis-R1'),
    handler: function(direction) {
      $('#circle-1').addClass('circle-alpha animated zoomIn');
      $('#circle-2').addClass('circle-alpha animated zoomIn');
      $('#circle-3').addClass('circle-alpha animated zoomIn');
      $('#circle-4').addClass('circle-alpha animated zoomIn');
      $('#arrow').addClass('diagonalInAbove');
    },
    offset: "50%"
  });

}


if ($('#hire-section').length != 0) {
  var hire = new Waypoint({
    element: document.getElementById('hire-section'),
    handler: function(direction) {
      lineAnimation("#hire-section");
      $('.mobile-d').addClass('circle-alpha animated fadeInLeft');
      $('#hire-C1').addClass('circle-alpha animated rotateIn');
      $('#hire-C2').addClass('circle-alpha animated rotateIn');
      $('#hire-C3').addClass('circle-alpha animated rotateIn');
    },
    offset: "50%"
  });
}

if ($('#contact-section').length != 0) {
  var hire = new Waypoint({
    element: document.getElementById('contact-section'),
    handler: function(direction) {
      lineAnimation("#contact-section");
      $('.img-d1').addClass('animated lightSpeedIn');
    },
    offset: "45%"
  });
}

// init Isotope
function isotopeInit() {
if ( $('.isotope').length != 0 ) {
  // console.log("aa");
  // var $grid = $('.isotope').isotope({
  //   itemSelector: '.grid-item',
  // });
  $(window).on("load resize", function () {
  $('.isotope').isotope({
    itemSelector     : ".isotope-item",
    animationEngine  : "best-available",
    transformsEnabled: true,
    resizesContainer : true,
    resizable        : true,
    easing           : "linear",
    layoutMode       : "masonry"
  });

  // filter items on button click
  $filter = $('.filter-menu');
  $filter.find("a").on("click touchstart", function (e) {
    var $t = $(this),
      selector = $t.data("filter");
    // Don't proceed if already selected
    if ($t.hasClass("filter-current"))
      return false;

    $filter.find("a").removeClass("filter-current");
    $t.addClass("filter-current");
    $('.isotope').isotope({filter: selector});

    e.stopPropagation();
    e.preventDefault();
  });
  })
}
}

// Initialization
  isotopeInit();

// --------------------------------------
// Magnific Popup 
// -----------------------------------------
if ( $(".thumbnail-href").length != 0 ) {
 
  $(".thumbnail-href").magnificPopup({
      gallery: {
        enabled: true
      },
      type : "image",
      callbacks  : {
        open : function () {
          this.content.addClass("animated fadeIn");
        },
        close: function () {
          this.content.removeClass("animated fadeIn");
        }
      }
  });
}

});