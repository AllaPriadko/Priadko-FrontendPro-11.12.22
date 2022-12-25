function reverseNum(number) {
    if (!(typeof number === 'number')) {
        console.log('Not a number');
        
    } else {
        let value = String(number);
        value = value.split('');
        value.reverse(number);
        value = value.join('');
        console.log(value)
    }
}
reverseNum(12345);
