
// 1 无序列表的顺序查找
function sequentialSearch(arr, key)
{
	for (var i = 0; i < arr.length; i++)
	{
		if (key === arr[i]) 
		{
			return i;
		}
	}
	return -1;
}

// 2 有序列表的二分查找
exports.binarySearch = function (arr, key)
{
	return binary(arr, 0, arr.length - 1, key);
}

function binary(arr, low, high, key)
{
	if (low > high)
	{
		return -1;
	}

	var mid = low + parseInt((high - low)/2);
	if (arr[mid] === key)
	{
		return mid;
	} else if (arr[mid] < key)
	{
		return binary(arr, mid+1, high, key);
	} else 
	{
		return binary(arr, low, mid - 1);
	}
}

function binary2(arr, low, high, key)
{
	while (low < high) 
	{
		var mid = low + parseInt((high - low)/2);
		if (arr[mid] === key) 
		{
			return mid;
		} else if (arr[mid] < key)
		{
			low = mid + 1;
		} else 
		{
			high = mid - 1;
		}
	}
	return -1;
}
