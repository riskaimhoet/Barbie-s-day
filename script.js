const envelope =
document.getElementById("envelope");

const seal =
document.getElementById("seal");

const letterText =
document.getElementById("typedMessage");

let opened = false;

function typeWriter(text){

    let index = 0;

    typedMessage.innerHTML = "";
    typedMessage.style.opacity = "1";

    const typing = setInterval(() => {

        typedMessage.innerHTML += text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(typing);

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