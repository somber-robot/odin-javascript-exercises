const palindromes = function (str) {
    newStr = Array.from(str).filter(letter => isAlpha(letter));
    str = newStr.toString().toLowerCase();
    for (i = 0; i < str.length/2; i++){
        if (str[i] !== str[str.length-1-i]) return false;
    }
    return true;
};

function isAlpha(str){
    return /^[A-Za-z0-9]+$/.test(str);
}

// Do not edit below this line
module.exports = palindromes;
