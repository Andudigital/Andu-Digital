/* =====================================
   Andu Digital & IT Support
   JavaScript File
===================================== */

// Smooth Scroll Navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Scroll Animation

const elements = document.querySelectorAll(
    ".card, section h2, .profile"
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.2

}

);

elements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="all 0.8s ease";

observer.observe(element);

});

// Header Shadow Effect

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow=
"0 5px 20px rgba(0,168,255,0.5)";

}

else{

header.style.boxShadow="none";

}

});

// Dynamic Copyright Year

const footer=document.querySelector("footer p:last-child");

if(footer){

const year=new Date().getFullYear();

footer.innerHTML=
"© "+year+" All Rights Reserved";

}

// WhatsApp Button Animation

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

whatsapp.addEventListener("mouseenter",()=>{

whatsapp.style.transform="scale(1.2)";

});

whatsapp.addEventListener("mouseleave",()=>{

whatsapp.style.transform="scale(1)";

});

}