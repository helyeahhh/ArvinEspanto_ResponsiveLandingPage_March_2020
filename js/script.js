

function myFunction() {
  var x = document.getElementById("nav-top");
  if (x.className === "top-nav") {
    x.className += " responsive";
    document.getElementById("nav-top").style.height = "300px";
  } else {
    x.className = "top-nav";
    document.getElementById("nav-top").style.height = "0";
  }
}

/* Scrolling effects */

const highlightScroll = () => {
    const scrollPos =  window.pageYOffset + 100
    const links = document.querySelectorAll('.top-nav a')
    
    links.forEach((link, index) => {
        const sections = document.querySelectorAll('.section')
        const activeSection = sections[index]
        const compare = activeSection.offsetTop <= scrollPos && (activeSection.offsetTop + activeSection.offsetHeight > scrollPos)  
        
        if(scrollPos > 100) {
            compare ? link.classList.add('active') : link.classList.remove('active');
            document.getElementById("fixed-top").classList.add("add-style");
            document.getElementById("logo").src = "images/logo-11.png";
        } else{
        	document.getElementById("fixed-top").classList.remove("add-style");
        	document.getElementById("logo").src = "images/logo.png";
        }
        
    })
}
window.addEventListener('scroll', highlightScroll)





jQuery(function($){

	$(function(){
    $('.slide').on("click", function () {
      $('.trigger').addClass("trans");
      $('.triggerHide').addClass("hideThis trans");
      $('#menu').addClass("show");
      $('#search').removeClass("show");
      $('.closeMenu').addClass("upButton");
      $('.addClass').addClass("z-index");
      $('.addMargin').addClass("marR15");
    });
    $('.searchMenu').on("click", function () {
      $('#search').addClass("show");
      $('.closeMenu').addClass("upButton");
      $('#menu').removeClass("show");    
      $('.triggerHide').addClass("hideThis trans"); 
      $('.addClass').addClass("z-index");
      $('.addMargin').addClass("marR15");
    });
     $('.closeMenu').on("click", function () {
      $('.addClass').removeClass("z-index");
      $('#search').removeClass("show");
      $('#menu').removeClass("show");   
      $('.triggerHide').removeClass("hideThis trans");  
      $('.closeMenu').removeClass("upButton");  
      $('.addMargin').removeClass("marR15");
    });
  }); 


    // toggle menu z-index
  $('.slide').click(function() {
      $('.index2').css('z-index', 0);
  });


  $(window).scroll(function() {
  //console.log($(window).scrollTop());
  if ($(window).scrollTop() > 500) {
      $('.mail').hide();
  } else {
    $('.mail').show();
  }
});

  $('.searchMenu').click(function() {
      $('.index2').css('z-index', 0);
  });

  $('.closeMenu').click(function() {
      setTimeout(function(){ $('.index2').css('z-index','2'); },500)
  });

$('input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    $('.labelForm').html(fileName + '<div class="border-bottom-black"></div>');
});

if ($('.wpcf7-form').hasClass('sent')){
      $('.removeThis').addClass('display-none');
      $('.border-bottom-white.marT40.marB20.showOn767').addClass('marginB100');
    }else{
      $('.removeThis').removeClass('display-none');
      $('.border-bottom-white.marT40.marB20.showOn767').removeClass('marginB100');
    }
    

  /*Scroll effects */
   $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if ($('#colorChange').hasClass('active') || $('#colorChange2').hasClass('active')){
      $('.navbar-nav').addClass('color-white');
      $('.sec.experience').addClass('black-link');
    }else{
      $('.navbar-nav').removeClass('color-white');
      $('.sec.experience').removeClass('black-link');

    }

    if ($('#removeSidemenu').hasClass('active')){
      //$('.brand').addClass('display-none');
      $('.navbar-nav').addClass('display-none');
      //$('.toTop').addClass('display-none');
    }else{
      $('.navbar-nav').removeClass('display-none');
      //$('.brand').removeClass('display-none');
      //$('.toTop').removeClass('display-none');
    }

    if ( $('#toExperience').hasClass('active') || $('#colorChange2').hasClass('active') | $('#colorChange').hasClass('active') ){
      $('.toTop').addClass('color-white');
    }else{
      $('.toTop').removeClass('color-white');
    }

    if (scroll > 650) {
      $(".toTop").addClass('showTop');
      $(".bigLogo").addClass('display-shrink');
      $(".smallLogo").removeClass('display-none');
      $(".smallLogo").addClass('addMargin31');
      $(".addHide").addClass('hideThis');

    }

    else{
    $(".toTop").removeClass('showTop'); 
    $(".bigLogo").removeClass('display-shrink');
    $(".smallLogo").addClass('display-none');
    $(".addHide").removeClass('hideThis');
    }

    if (scroll > 0) {
      $(".sidebar").addClass('showSidebar');
    }else{
      $(".sidebar").removeClass('showSidebar'); 
    }

  });

   $(document).on('click','.sec',function(){
    var isactive = $('.sec').hasClass('active');
    var tabsId = $(this).attr('id');

    if(isactive){
      $('.sec').removeClass('active');
      $('#'+tabsId).addClass('active');
    }else{
      $('#'+tabsId).addClass('active');
    }
  });


  $('body').scrollspy({target: ".navbar", offset: 500}); 

  if( jQuery( 'body' ).hasClass( 'home' ) ) {
    // animations on homepage
    $(window).scroll(function(){

        if(isScrolledIntoView($('.headerText'))){
          $('.headerText').addClass('fadeInLeft');
        }

        if(isScrolledIntoView($('.headerText2'))){
          $('.headerText2').addClass('fadeInLeft');
        }

        if(isScrolledIntoView($('.welcome-text'))){
          $('.welcome-text').addClass('fadeInRight');
        }

        if(isScrolledIntoView($('#latestWork'))){
          $('#latestWork').addClass('tada');
        }

        if(isScrolledIntoView($('.services_section'))){
          $('.services_section').addClass('fadeIn');
        }

        if(isScrolledIntoView($('#insights'))){
          $('#insights').addClass('zoomIn');
        }  
      
        if(isScrolledIntoView($('.form-wrap'))){
          $('.form-wrap').addClass('fadeInUp');
        }

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight || $(window).scrollTop() == 0) {
          $('.headerText').removeClass('fadeInLeft');
          $('.headerText2').removeClass('fadeInLeft');
          $('.welcome-text').removeClass('fadeInRight');
          $('#latestWork').removeClass('tada');
          $('.services_section').removeClass('fadeIn');
          $('#insights').removeClass('zoomIn');
          $('.form-wrap').removeClass('fadeInUp');
        }

    });

    function isScrolledIntoView(elem){

        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = Math.round($window.scrollTop());
        var docViewBottom = Math.round(docViewTop + $window.height());

        var elemTop = Math.round( $elem.offset());
        var elemBottom = Math.round( elemTop + $elem.height());

        var isVisible = (elemBottom < docViewBottom) && (elemTop > docViewTop);
        return isVisible;
    }
  }
  

});