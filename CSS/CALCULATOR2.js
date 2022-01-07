function ifelse() {
    let operation = prompt("Enter operator (either + , - , * or /)");   
    // while (true) {
    //     let operation = prompt("Enter operator (either + , - , * or /)");
    //     if (operation === "+","-","*","/") {
    //         break;            
    //     }
    //     else {
    //         alert(`You should input correct (either + , - , * or /)`);
    //         let operation = prompt("Enter operator (either + , - , * or /");
    //     }
    // }

    let number1 = Number(prompt("Number 1:"));
    let number2 = Number(prompt("Number 2:"));
    let result;

    if (operation == "+") {
        console.log(result = number1 + number2);
        document.write(`${number1} + ${number2} = ${result}`);
    }
    else if (operation == "-") {
        console.log(result = number1 - number2);
        document.write(`${number1} - ${number2} = ${result}`);
    }
    else if (operation == "*") {
        console.log(result = number1 * number2);
        document.write(`${number1} * ${number2} = ${result}`);
    }
    else if (operation == "/") {
        console.log(result = number1 / number2);
        document.write(`${number1} : ${number2} = ${result}`);
    }
}