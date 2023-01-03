function maxLength(element) {
    if (typeof element === 'string') {

        let array = element.split(' ');
        let longest = array[0];
        for (let i = 1; i < array.length; i++){
            if (array[i].length > longest.length) {
                longest = array[i];
            }
        }
        console.log(longest);
    } else {
        console.log('Not a string');
        return "";
    }
}
maxLength('london is the capital of great britain its political economic and cultural centre');
