const fibonacci = function(pos) {
    pos = +pos;
    if (pos < 0) return "OOPS";
    if (pos == 0) return 0;

    let counter = 2;
    let x = 1, y = 1;
    while(counter < pos){
        temp = x;
        x = y;
        y += temp;
        counter++;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
