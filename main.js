$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});



    var icon = document.getElementById("icon");

    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "light");
    }
     




     let localData = localStorage.getItem("theme")
      if(localData =="light"){
          icon.src = "moon.png";
          
          document.body.classList.remove("dark-theme");
      }else  if(localData =="dark"){
        icon.src = "sun.png";
          document.body.classList.add("dark-theme");
      }


     icon.onclick = function(){
         document.body.classList.toggle("dark-theme");
         if(document.body.classList.contains("dark-theme")){
             icon.src="sun.png";
             localStorage.setItem("theme", "dark");
        }else{
            icon.src = "moon.png";
            localStorage.setItem("theme", "light");
        }
     }
