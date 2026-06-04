function checkNumber() {
    let number = document.getElementById("number").value;
    console.log(number);

    if (number % 2 === 0) {
        alert("number is even");
    } else {
        alert("number is odd");
    }
}

function checkcolor() {
    document.body.style.backgroundColor = "blue";
}