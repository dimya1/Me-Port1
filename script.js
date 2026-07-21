const menu = document.querySelector('.menu');
const toggle =document.getElementById('toggle');

toggle.addEventListener('click', function(){
    menu.classList.toggle('active');
})

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    let scroll = this.window.scrollY;
    if(scroll > 100){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})

window.onload = function(){
    new Splide('.Mysplide',{
        type:'loop',
        drag:'free',
        focus:'center',
        perPage:2.5,
        gap:'2rem',
        pagination:false,
        breakpoints:{
            1400:{
                perPage:2
            },
            1200:{
                perPage:1.5
            },
            500:{
                perPage:1
            }
        }
    }).mount({ AutoScroll : window.splide.Extensions.AutoScroll})
}

const textArray = ["Automation Engineer | Embedded System", "IoT Enthusiast"];
const typingElement = document.getElementById("typing-text");

let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = textArray[textArrayIndex];

    if (isDeleting) {
        typingElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 55;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 1000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length; 
        typeSpeed = 500; 
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(typeWriter, 500));