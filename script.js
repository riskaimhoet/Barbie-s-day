const envelope =
document.getElementById("envelope");

const seal =
document.getElementById("seal");

const letterText =
document.getElementById("typedMessage");

let opened = false;

const giftScene =
document.getElementById("giftScene");

const giftBox =
document.getElementById("giftBox");

const questionBox =
document.getElementById("questionBox");

const giftItems =
document.querySelectorAll(".gift-item");

const background =
document.querySelector(".background");


function typeWriter(text){

    let index = 0;

    typedMessage.innerHTML = "";
    typedMessage.style.opacity = "1";

    const typing = setInterval(() => {

        typedMessage.innerHTML += text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(typing);

            setTimeout(() => {

                envelope.classList.add("fade-out");
                document
       			.querySelector(".letter-text")
      			.classList.add("fade-out");

                typedMessage.classList.add("fade-out");


            }, 1000);


            setTimeout(() => {

                showGiftScene();


            }, 2500);
        }

    }, 90);

}


seal.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    /* efek seal ditekan */

    seal.classList.add("pressed");

    /* amplop fade */

    envelope.classList.add("switching");

    /* tahap 1 */

    setTimeout(() => {

        envelope.src = "amplop2.PNG";

        envelope.classList.remove("switching");

    }, 400);

    /* tahap 2 */

    setTimeout(() => {

        envelope.classList.add("switching");

    }, 900);

    /* tahap 3 */

    setTimeout(() => {

        envelope.src = "amplop3.PNG";

        envelope.classList.remove("switching");

    }, 1300);

    /* tampilkan surat */

    setTimeout(() => {

        typeWriter(
            "Happy 23rd our Barbie🩵"
       
        );

    }, 1800); 

});

function showGiftScene(){

    giftScene.style.display = "flex";

}

giftBox.addEventListener("click", () => {

    giftBox.src = "openedgift.PNG";

    giftItems.forEach(item => {

        item.classList.add("explode");

    });

    background.classList.add("change");

    setTimeout(() => {

        questionBox.classList.add("show");

    }, 7000);

    setTimeout(() => {

        giftBox.style.opacity = "0";

    }, 3000);

});

/* ========================= */
/* Go to Page2 */
/* ========================= */

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

function goToPage2(){

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="page2.html";

    },800);

}

yesBtn.onclick=goToPage2;

noBtn.onclick=goToPage2;