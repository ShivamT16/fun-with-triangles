const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-trianlge-btn");
const outputE1 = document.querySelector("#output");

function calculateSumofAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumofAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputE1.innerText = ("Yayy, The angles form a Triangle");
    } else {
        outputE1.innerText = ("Oh no! The angles don't form a Triangle");
    }
}

isTriangleBtn.addEventListener("click", isTriangle)