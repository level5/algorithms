var sort = require('./sort');

var arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.insertionSort(arr);
console.log("insertion sort:", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.mergeSort(arr);
console.log("merge sort:", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.insertionSort2(arr);
console.log("insertion sort2:", arr);


var exercise = require('./exercise');
console.log("is exist:", exercise.isExist([3,14,22,65,9,10,41,39], 80));
console.log("is exist 2:", exercise.isExist2([3,14,22,65,9,10,41,391], 80));