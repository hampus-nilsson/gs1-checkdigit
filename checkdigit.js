function checkdigit(input) {
    let array = input.split('').reverse();

    let total = 0;
    let i = 1;
    array.forEach(number => {
        number = parseInt(number);
        if (i % 2 === 0) {
            total = total + number;
        }
        else
        {
            total = total + (number * 3);
        }
        i++;
    });

    return (Math.ceil(total / 10) * 10) - total;
}
