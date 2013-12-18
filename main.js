var sort = require('./sort');

var arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.insertionSort(arr);
console.log("insertion sort:", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.insertionSort2(arr);
console.log("insertion sort2:", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.mergeSort(arr);
console.log("merge sort:", arr);

arr = [1,4,3,77,12,32,66,13,16,63,46,9];
sort.heapSort(arr);
console.log("heap sort:", arr);

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