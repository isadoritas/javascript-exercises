const removeFromArray = function(array, remove) {
    return array.filter(function (num) {
        return num !== remove;
    });
}

// Do not edit below this line
module.exports = removeFromArray;
