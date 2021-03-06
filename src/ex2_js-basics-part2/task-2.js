const array = [2,5,3,10,1];
function checkArray(array) {
    array.forEach(function (element, index){
        console.log(index + '. ' + element);
    });
    console.log('All elements: ' + array.length);
    return;
}
checkArray(array);
module.exports = checkArray;
