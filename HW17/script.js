const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function getRandom(length, string) {
    
    let result = '';

    for (i = 0; i < length; i++){
        
        result = result + string.charAt(Math.floor(Math.random() * string.length));
    }
    return result;
}
console.log(getRandom(16, characters));

