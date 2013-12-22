var shift = require('./shiftChars');


var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift1(arr, 3);
console.log("way 1:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift2(arr, 3);
console.log("way 2:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift3(arr, 3);
console.log("way 3:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift4(arr, 3);
console.log("way 4:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift5(arr, 3);
console.log("way 5:", arr);

