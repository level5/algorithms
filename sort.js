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