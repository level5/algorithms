// insertion sort
exports.insertionSort = function (arr) 
{
	for (var i = 1; i < arr.length; i++)
	{
		var key = arr[i];
		var j = i - 1;
		while (arr[j] > key && j >= 0) 
		{
			arr[j + 1] = arr[j];
			j--;
		} 
		arr[j+1] = key;

	}
}

function insertionSort2 (arr, lo, hi)
{
	if (lo + 1 < hi) 
	{
		insertionSort2(arr, lo, hi - 1);
		
		var key = arr[hi - 1];
		var j = hi - 2;
		while (key < arr[j] && j >=0) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = key;
	}
}

exports.insertionSort2 = function (arr)
{
	insertionSort2(arr, 0, arr.length);
}

exports.insertionSort3 = function (arr)
{
	
}


// merge sort
function merge(arr, lo, mid, hi) 
{
	var larr = arr.slice(lo, mid);
	larr.push(Infinity);
	var rarr = arr.slice(mid, hi);
	rarr.push(Infinity);

	var l = 0, r = 0;
	for (var i = lo; i < hi; i++) 
	{
		if (larr[l] < rarr[r]) 
		{
			arr[i] = larr[l]; 
			l++;
		} else {
			arr[i] = rarr[r];
			r++;
		}
	}
}

function mergeSort(arr, lo, hi)
{
	if (lo + 1 < hi)
	{
		var mid = parseInt((lo + hi)/2);

		mergeSort(arr, lo, mid);
		mergeSort(arr, mid, hi);
		merge(arr, lo, mid, hi);
	}


}

exports.mergeSort = function (arr)
{
	mergeSort(arr, 0, arr.length);
}

// heap sort
// parent(i) -> parseInt(i/2)
// left(i) -> 2*i
// right(i) -> 2*i + 1

function maxHeapify(arr, i, size)
{
	var l = 2*(i + 1) - 1;
	var r = 2*(i + 1);

	var lagest = i;
	if (l + 1 <= size && arr[lagest] < arr[l])
	{
		lagest = l;
	}
	if (r + 1 <= size && arr[lagest] < arr[r])
	{
		lagest = r;
	}

	if (lagest != i) 
	{
		var tmp = arr[lagest];
		arr[lagest] = arr[i];
		arr[i] = tmp;

		maxHeapify(arr, lagest, size);
	}
}

function buildMaxHeap (arr)
{
	var lastNode = parseInt(arr.length/2) - 1;

	for (var i = lastNode; i >= 0; i--)
	{
		maxHeapify(arr, i, arr.length);
	}
}

exports.heapSort = function (arr)
{
	buildMaxHeap(arr);

	for (var i = arr.length - 1; i > 0; i--)
	{
		var tmp = arr[i];
		arr[i] = arr[0];
		arr[0] = tmp;

		maxHeapify(arr, 0, i);
	}
};

function MaxHeap()
{
	this.size = 0;
	this.arr = [];
}

MaxHeap.prototype.heapMaximum = function ()
{
	if (this.size > 0)
	{
		return arr[0];
	} 
};

MaxHeap.prototype.heapExtractMax = function ()
{
	if (this.size === 0){
		return;
	}

	var max = this.arr[0];
	this.arr[0] = this.arr[this.size - 1];
	this.size -= 1;

	maxHeapify(this.arr, 0, this.size);

	return max;
};

MaxHeap.prototype.heapIncreaseKey = function (i, key)
{
	if (key < this.arr[i])
	{
		return;
	}

	this.arr[i] = key;

	while (i > 0) 
	{
		var j = parseInt((i+1)/2) - 1;
		
		if (this.arr[j] > this.arr[i])
		{
			break;
		}
		var tmp = this.arr[j];
		this.arr[j] = this.arr[i];
		this.arr[i] = tmp;

		i = j;
	}
};

MaxHeap.prototype.maxHeapInsert = function (key)
{
	this.arr[this.size] = -Infinity;
	this.size += 1;

	this.heapIncreaseKey(this.size - 1, key);
};

exports.getMaxHeap = function () 
{
	return new MaxHeap();
};

// quick sort
