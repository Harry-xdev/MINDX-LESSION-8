function prime() {
    const number = parseInt(prompt("Please input integer:"));

    let isPrime = true;
    
    if (number < 2) {
        isPrime = false;
    }
    else {
        for (let i = 2; i < number; i++ ) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        alert(`${number} is a prime number`)
    }
    else {
        alert(`${number} is not a prime number`)
    }
    





        
}
