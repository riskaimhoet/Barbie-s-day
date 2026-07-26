// =====================================
// WHEEL
// =====================================

const wheel = document.getElementById("wheel");

const scratchCanvas = document.getElementById("scratchCanvas");

const ctx = scratchCanvas.getContext("2d");

const scratchText = document.getElementById("scratch-text");

const backButtons = document.getElementById("back-buttons");

const scratchImage =
    new Image();

scratchImage.src = "Scratchmask.PNG";

let scratching = false;

let scratchCount = 0;
let scratchFinished = false;

const confettiContainer =
    document.getElementById("confetti-container");

const scratchContainer =
    document.getElementById("scratch-container");

let isSpinning = false;

wheel.addEventListener("click", spinWheel);

function spinWheel(){

    if(isSpinning) return;

    isSpinning = true;

    // Jumlah sektor pada wheel
    const totalSections = 6;

    // Sudut tiap sektor
    const sectionAngle = 360 / totalSections;

    // Pilih sektor secara acak
    const randomSection = Math.floor(Math.random() * totalSections);

    // Berhenti di tengah sektor (bukan di garis)
    const targetAngle =
        randomSection * sectionAngle +
        sectionAngle / 2;

    // Tambahkan putaran penuh
    const extraRotation =
        360 * (5 + Math.floor(Math.random() * 3));

    const finalRotation =
        extraRotation + targetAngle;

    wheel.style.transform =
        `rotate(${finalRotation}deg)`;

}

// =====================================
// CONFETTI
// =====================================

wheel.addEventListener("transitionend", () => {

    createConfetti();

});

function createConfetti(){

    const colors = [

        "#FFD54F",
        "#FF8FAB",
        "#A5D6A7",
        "#90CAF9",
        "#FFFFFF"

    ];

    // Ambil posisi tengah wheel
    const rect = wheel.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for(let i = 0; i < 180; i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        piece.style.left = centerX + "px";
        piece.style.top = centerY + "px";

        // Arah acak
        const angle = Math.random() * Math.PI * 2;

        // Jarak acak
        const distance = 150 + Math.random() * 250;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        piece.style.setProperty("--x", x + "px");
        piece.style.setProperty("--y", y + "px");

        confettiContainer.appendChild(piece);

        piece.addEventListener("animationend", () => {

            piece.remove();

        });

    }

    setTimeout(showScratchCard,1500);

}

// =====================================
// SCRATCH CARD
// =====================================

function showScratchCard(){

    wheel.style.opacity = "0";

    document
        .getElementById("pointer")
        .style.opacity = "0";

    scratchContainer.style.display = "flex";

    requestAnimationFrame(()=>{

        scratchContainer.classList.add("show");

        initializeScratch();

    });

}

// =====================================
// SCRATCH
// =====================================

function initializeScratch(){

    const qr =
        document.getElementById("qr");

    const width =
        qr.clientWidth;

    const height =
        qr.clientHeight;

    scratchCanvas.width = width;

    scratchCanvas.height = height;

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    if(scratchImage.complete){

        drawScratch();

    }else{

        scratchImage.onload =
            drawScratch;

    }

}

function drawScratch(){

    ctx.drawImage(

        scratchImage,

        0,

        0,

        scratchCanvas.width,

        scratchCanvas.height

    );

}

// =====================================
// SCRATCH EFFECT
// =====================================

function scratch(x, y){

    if(scratchFinished) return;

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();

    ctx.arc(x, y, 10, 0, Math.PI * 2);

    ctx.fill();

    scratchCount++;

    if(scratchCount >= 10){

        scratchFinished = true;

        // Hilangkan sisa mask
        ctx.clearRect(
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        );

        // Tunggu sebentar lalu tampilkan tombol
        setTimeout(finishScratch, 800);

    }

}

// =====================================
// MOUSE
// =====================================

scratchCanvas.addEventListener("mousedown", () => {

    scratching = true;

});

window.addEventListener("mouseup", () => {

    scratching = false;

});

scratchCanvas.addEventListener("mousemove", (e) => {

    if (!scratching) return;

    const rect = scratchCanvas.getBoundingClientRect();

    scratch(

        e.clientX - rect.left,

        e.clientY - rect.top

    );

});

// =====================================
// TOUCH
// =====================================

scratchCanvas.addEventListener("touchstart", () => {

    scratching = true;

});

window.addEventListener("touchend", () => {

    scratching = false;

});

scratchCanvas.addEventListener("touchmove", (e) => {

    if (!scratching) return;

    e.preventDefault();

    const rect = scratchCanvas.getBoundingClientRect();

    const touch = e.touches[0];

    scratch(

        touch.clientX - rect.left,

        touch.clientY - rect.top

    );

});

function finishScratch(){

    scratchText.style.display = "none";

    backButtons.classList.add("show");

}
