const password = document.querySelector('#create-password');
password.addEventListener("keyup", passwordStrength);

let indicatorContainer = document.querySelector('#strength-indicator');
let indicatorValue = document.createElement("small");


function passwordStrength() {
    if (password.value.length < 4) {
        indicatorValue.innerHTML = "weak";
        indicatorContainer.appendChild(indicatorValue);
    } else if (password.value.length < 7) {
        indicatorValue.innerHTML = "medium";
        indicatorContainer.appendChild(indicatorValue);
    } else {
        indicatorValue.innerHTML = "strong";
        indicatorContainer.appendChild(indicatorValue);
    }
}
