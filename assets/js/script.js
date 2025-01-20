
// const mySection = document.querySelector(".myProfile"),
//         hireBtn = mySection.querySelector("#hireBtn"),
//         closeBtn = mySection.querySelectorAll("#close");

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        } 
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["a Software Developer", "a Integration Developer", "a Code enthusiast", "a Solution driven", "a Agile", "a Visual Leaner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // typing animation script
    var typed = new Typed(".typing-2", {
        strings: ["a Software Developer", "a Integration Developer", "a Code enthusiast", "a Solution driven", "a Agile", "a Visual Leaner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// hireBtn.addEventListener("click", () =>{
//    mySection.classList.add("show") 
// });

// closeBtn.forEach(cBtn => {
//     cBtn.addEventListener("click", () => {
//         mySection.classList.remove("show") 
//     });
// });

// Skills Section
const skillsContent = document.getElementsByClassName('my_skill_content'), 
        skillsHeader=document.querySelectorAll('.skill_header');
function toggleSkills(){
    let itemClass = this.parentNode.className;
    for (p = 0; p < skillsContent.length; p++) {
        skillsContent[p].className = 'my_skill_content skills_close';        
    }
    if(itemClass === 'my_skill_content skills_close'){
        this.parentNode.className = 'my_skill_content skills_open'
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills)
})

// Qualification Section
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
});

// Portfolio Swiper
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// Drawings Swiper
let swiper1 = new Swiper(".drawings_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});