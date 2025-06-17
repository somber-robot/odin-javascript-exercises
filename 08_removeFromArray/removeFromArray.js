const removeFromArray = function() {
    for (i = 1; i < arguments.length; i++){
        while (arguments[0].includes(arguments[i])){
            let index = arguments[0].indexOf(arguments[i]);
            if (index !== -1) arguments[0].splice(index, 1);
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
