module.exports = function zeros(expression) {
    let factorials = expression.split("*");
    let two = 0;
    let five = 0;

    for (let i = 0; i < factorials.length; i++) {
        let number = parseInt(factorials[i], 10);
        simples(number, isDouble(factorials[i]));
    }

    function simples(number, flag) {
        if (!isEven(number) && flag) {
            for (let i = 1; i <= number; i += 2) {
                let n = i;
                while (n % 5 === 0) {
                    five++;
                    n = n / 5;
                }
            }
        }
        else if (isEven(number) && flag) {
            let n = 1;
            while (Math.floor(number / (Math.pow(2, n))) > 0) {
                two += Math.floor(number / (Math.pow(2, n)));
                n++;
            }
            for (let i = 0; i <= number; i += 10) {
                let k = i;
                if (i === 0) {
                    continue;
                }
                while (k % 5 === 0) {
                    five++;
                    k = Math.floor(k / 5);
                }
            }
        }
        else {
            let n = 1;
            while (Math.floor(number / (Math.pow(2, n))) > 0) {
                two += Math.floor(number / (Math.pow(2, n)));
                n++;
            }
            n = 1;
            while (Math.floor(number / (Math.pow(5, n))) > 0) {
                five += Math.floor(number / (Math.pow(5, n)));
                n++;
            }
        }

    }

    if (two <= five) {
        return two;
    }
    else return five;
}


function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function isDouble(item) {

    if (item.includes("!!")) {
        return true;
    }
    else return false;
}

