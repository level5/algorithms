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



var math = require('./math');

console.log('sum of max sub:', math.maxSub([1, -2, 3, 10, -4, 7, 2, -5]));
console.log('sum of max sub 2:', math.maxSub2([1, -2, 3, 10, -4, 7, 2, -5]));

console.log('sum of max sub:', math.maxSub([-1, -2, -3, -10, -4, -7, -2, -5]));
console.log('sum of max sub 2:', math.maxSub2([-1, -2, -3, -10, -4, -7, -2, -5]));


var lcs = require('./lcs');

var str1 = 'BDCACFKOIOWE';
var str2 = 'ABCEIIKIACVX';

var time = new Date().getTime();
console.log('lcs:', lcs.lcs(str1, str2));
var now = new Date().getTime();
console.log('cost:', now - time);

var time = new Date().getTime();
console.log('lcs2:', lcs.lcs2(str1, str2));
var now = new Date().getTime();
console.log('cost:', now - time);

var time = new Date().getTime();
console.log('lcs3:', lcs.lcs3(str1, str2));
var now = new Date().getTime();
console.log('cost:', now - time);