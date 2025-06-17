const sumAll = function(a, b) {
    if (a < 0 || b < 0 
              || a != Math.floor(a) 
              || b != Math.floor(b)
              || typeof(a) != "number"
              || typeof(b) != "number"
    ) return "ERROR";

    let sum = 0;
    let start, end;
    if (a < b) { start = a; end = b;}
    else {start = b, end = a}
    for (i = start; i <= end; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
