const film = document.querySelectorAll(".film");

const bgMusic = document.getElementById("bgMusic");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

const bgMusic = document.getElementById("bgMusic");

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

slidesPerView: 1.15,

spaceBetween: 0,

coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:120,
    modifier:1,
    scale:0.88,
    slideShadows:false
}

});

window.addEventListener("load",()=>{

    bgMusic.volume = 0;

bgMusic.play().catch(() => {});

let volume = 0;

const fadeMusic = setInterval(() => {

    volume += 0.02;

    if (volume >= 0.25) {

        volume = 0.25;

        clearInterval(fadeMusic);

    }

    bgMusic.volume = volume;

},100);

document.getElementById("bg3").scrollIntoView({

behavior:"instant",
block:"start"

});

});

window.addEventListener("load",()=>{

setTimeout(()=>{

swiper.slideNext(200);

setTimeout(() => {

    swiper.slidePrev(200);

    swiper.slideTo(0,0);

},500);

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

},100);

setTimeout(()=>{

line2.classList.add("show");

},1100);

setTimeout(()=>{

line3.classList.add("show");

},2100);

setTimeout(()=>{

swipeGuide.classList.add("show");

},3100);

}

});

},{
threshold:.6
});

endingObserver.observe(ending);


/* ========================= */
/* Background6 */
/* ========================= */

const typingBox = document.getElementById("typingText");

if (typingBox) {

    const paragraphs = typingBox.querySelectorAll("p");

    paragraphs.forEach(p => {
        p.dataset.text = p.textContent;
        p.textContent = "";
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            observer.disconnect();

            typingBox.style.opacity = "1";

            let index = 0;

            function typeParagraph() {

                if (index >= paragraphs.length) return;

                const p = paragraphs[index];

                const text = p.dataset.text;

                let i = 0;

                function typeChar() {

                    if (i < text.length) {

                        p.textContent += text.charAt(i);

                        i++;

                        setTimeout(typeChar, 25);

                    } else {

                        index++;

                        setTimeout(typeParagraph, 250);

                    }

                }

                typeChar();

            }

            typeParagraph();

        });

    }, {
        threshold: 0.35
    });

    observer.observe(typingBox);

}

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

let musicStarted = false;

function startBackgroundMusic() {

    if (musicStarted) return;

    musicStarted = true;

    bgMusic.volume = 0;

    bgMusic.play().catch(err => {

        console.log("Music blocked:", err);

    });

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.25) {

            volume = 0.25;

            clearInterval(fade);

        }

        bgMusic.volume = volume;

    },100);

}

window.addEventListener(
    "touchstart",
    startBackgroundMusic,
    { once:true }
);

window.addEventListener(
    "pointerdown",
    startBackgroundMusic,
    { once:true }
);

window.addEventListener(
    "scroll",
    startBackgroundMusic,
    { once:true }
);
