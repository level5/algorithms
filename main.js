
var str = require('./string');

var target = ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'c', 'a'];
var source = ['b', 'a', 'c', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'c', 'a', 'b'];

console.log('Naive Matcher:');
str.naiveMatch(source, target);
console.log('KMP matcher:');
str.matchKMP(source, target);

target = ['a', 'b', 'a', 'b'];
source = ['c', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'a', 'b', 'a', 'b', 'c', 'a', 'b'];

console.log('Naive Matcher:');
str.naiveMatch(source, target);
console.log('KMP matcher:');
str.matchKMP(source, target);

target = ['a', 'a'];
source = ['a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'a', 'b', 'a', 'b', 'c', 'a', 'b'];

console.log('Naive Matcher:');
str.naiveMatch(source, target);
console.log('KMP matcher:');
str.matchKMP(source, target);


console.log('fisrt char which is not repeated:', str.firstNotRepeatChar('aacdbcd'));


var sort = require('./sort');

var arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.insertionSort(arr);
console.log("insertion sort:    ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.insertionSort2(arr);
console.log("insertion sort2:   ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.mergeSort(arr);
console.log("merge sort:        ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.heapSort(arr);
console.log("heap sort:         ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.quickSort(arr);
console.log("quick sort:        ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9, 13, 4, 77, 16];
sort.quickSort2(arr);
console.log("quick sort 2:      ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9, 13, 4, 77, 16]; // elementsnn must be 0 ~ n
sort.countSort(arr);
console.log("count sort:        ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9, 13, 4, 77, 16];
sort.selectionSort(arr);
console.log("selection sort:    ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9, 13, 4, 77, 16];
sort.shellSort(arr);
console.log("shell sort:        ", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9, 13, 4, 77, 16];
sort.bubbleSort(arr);
console.log("bubble sort:       ", arr);

var exercise = require('./exercise');
console.log("is exist:", exercise.isExist([3,14,22,65,9,10,41,39], 80));
console.log("is exist 2:", exercise.isExist2([3,14,22,65,9,10,41,391], 80));

var maxHeap = sort.getMaxHeap();
maxHeap.maxHeapInsert(100);
maxHeap.maxHeapInsert(200);
maxHeap.maxHeapInsert(300);
maxHeap.maxHeapInsert(400);
maxHeap.maxHeapInsert(150);
maxHeap.maxHeapInsert(111);
maxHeap.maxHeapInsert(222);
maxHeap.maxHeapInsert(999);
maxHeap.maxHeapInsert(800);

for (var i = 0; i < 4; i++) 
{
	console.log(maxHeap.heapExtractMax());
}

maxHeap.maxHeapInsert(151);
maxHeap.maxHeapInsert(113);
maxHeap.maxHeapInsert(242);
maxHeap.maxHeapInsert(919);
maxHeap.maxHeapInsert(850);

console.log('another:');

for (var i = 0; i < 10; i++) 
{
	console.log(maxHeap.heapExtractMax());
}

var exercise = require('./exercise');
console.log("is exist:", exercise.isExist([3,14,22,65,9,10,41,39], 80));
console.log("is exist 2:", exercise.isExist2([3,14,22,65,9,10,41,39], 80));
console.log("is exist 3:", exercise.isExist3([3,14,22,65,9,10,41,39], 80));
console.log("is exist:", exercise.isExist([3,14,22,65,9,10,41,391], 80));
console.log("is exist 2:", exercise.isExist2([3,14,22,65,9,10,41,391], 80));
console.log("is exist 3:", exercise.isExist3([3,14,22,65,9,10,41,391], 80));
