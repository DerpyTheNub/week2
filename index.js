const selectMenu = document.querySelector("#colors");
const btnGetResult = document.querySelector("button");
const resultArea = document.querySelector(".result");
const resultContainer = document.querySelector(".result-container")

btnGetResult.addEventListener("click", () => {
    const userChoice = selectMenu.options[selectMenu.selectedIndex].value;
    let resultText = "";

    switch(userChoice) {
        case "red":
            resultText = "Your favorite color is red.";
            break
        case "orange":
            resultText = "You prefer the color orange.";
            break
        case "yellow":
            resultText = "You like yellow.";
            break
        case "green":
            resultText = "Green is your favorite color.";
            break
        case "blue":
            resultText = "Your preferred color is blue.";
            break
        case "purple":
            resultText = "Purple is the color you like.";
            break
        default:
            resultText = "I dont have anything to say about you.";
            break
    }

    switch(userChoice) {
        case "green":
            resultContainer.style.color = "white";
            break
        case "blue":
            resultContainer.style.color = "white";
            break
        case "purple":
            resultContainer.style.color = "white";
            break
        default:
            resultContainer.style.color = "#284652";
    }

    if(userChoice === "other") {
        resultContainer.style.backgroundColor = "white";
    } else {
        resultContainer.style.backgroundColor = userChoice;
    }

    resultArea.innerHTML = resultText;

});


// if(userChoice === "red") {
//     resultText = "Your favorite color is red.";
// } else if (userChoice === "orange") {
//     resultText = "You prefer the color orange.";
// } else if (userChoice === "yellow") {
//     resultText = "You like yellow.";
// } else if (userChoice === "green") {
//     resultText = "Green is your favorite color.";
// } else if (userChoice === "blue") {
//     resultText = "Your preferred color is blue.";
// } else if (userChoice === "purple") {
//     resultText = "Purple is the color you like.";
// } else {
//     resultText = "I dont have anything to say about you.";
// }