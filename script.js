
//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    let inputValue = document.getElementById("ip").value;
    let outputDiv = document.getElementById("output");

    // Clear previous results
    outputDiv.innerHTML = "Processing...";

    // Convert input to a number
    let number = parseFloat(inputValue);

    if (isNaN(number)) {
        outputDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    // Start the promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${number}`;
            resolve(number);
        }, 2000);
    })

    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                outputDiv.innerHTML += `<br>Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                outputDiv.innerHTML += `<br>Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                outputDiv.innerHTML += `<br>Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                outputDiv.innerHTML += `<br>Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .catch((error) => {
        outputDiv.innerHTML = `Error: ${error}`;
    });
});