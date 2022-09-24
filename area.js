const inputBH = document.querySelectorAll(".bh-input");
const areaBtn = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#output");

function calculateArea(b, h) {
    const area = 0.5 * b * h;
    return area;
}

function showArea() {
    const area = calculateArea(Number(inputBH[0].value), Number(inputBH[1].value));
    outputE1.innerText = "The area is " + (area) + " cm²";

}

areaBtn.addEventListener("click", showArea);