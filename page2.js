const film = document.querySelectorAll(".film");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.3
});

film.forEach(item=>{

observer.observe(item);

});


/* ========================= */
/* Background 5 - Swiper */
/* ========================= */

const swiper = new Swiper(".mySwiper",{

effect:"coverflow",

grabCursor:true,

centeredSlides:true,

slidesPerView:1.6,
spaceBetween:-90,

initialSlide:0,

loop:false,

speed:700,

coverflowEffect:{

rotate:0,

stretch:0,

depth:250,

modifier:1.2,

scale:0.82,

slideShadows:false

}

});

window.addEventListener("load",()=>{

document.getElementById("bg3").scrollIntoView({

behavior:"instant",
block:"start"

});

});

window.addEventListener("load",()=>{

setTimeout(()=>{

swiper.slideNext(300);

setTimeout(()=>{

swiper.slidePrev(300);

},350);

},700);

});


/* ========================= */
/* Background7 */
/* ========================= */

const bg7Photo = document.querySelectorAll(".bg7-photo");

const bg7Observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.35
});

bg7Photo.forEach(item=>{

bg7Observer.observe(item);

});


/* ========================= */
/* Ending Page2 */
/* ========================= */

const ending = document.querySelector(".ending-page2");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const swipeGuide = document.querySelector(".swipe-guide");

const endingObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

setTimeout(()=>{

line1.classList.add("show");

},300);

setTimeout(()=>{

line2.classList.add("show");

},1400);

setTimeout(()=>{

line3.classList.add("show");

},2500);

setTimeout(()=>{

swipeGuide.classList.add("show");

},3800);

}

});

},{
threshold:.6
});

endingObserver.observe(ending);

const typingTexts = document.querySelectorAll(".typing-text");

const typingObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const element = entry.target;

            if(element.dataset.done) return;

            element.dataset.done = true;

            const originalText = element.textContent;

            element.textContent = "";

            element.classList.add("show");

            let i = 0;

            function type(){

                if(i < originalText.length){

                    element.textContent += originalText.charAt(i);

                    i++;

                    setTimeout(type,25);

                }

            }

            type();

        }

    });

},{
    threshold:0.4
});

typingTexts.forEach(item=>{
    typingObserver.observe(item);
});

window.addEventListener("scroll", () => {

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
    ) {

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "page3.html";
        },800);

    }

});
