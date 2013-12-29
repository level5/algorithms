
function binarySearch(arr, low, high, key)
{
	if (high <= low) 
	{
		return -1;
	}

	var mid = parseInt((high - low)/2) + low;
	if (arr[mid] === key) 
	{
		return mid;
	} else if (arr[mid] < key)
	{
		return binarySearch(arr, low, mid);
	} else 
	{
		return binarySearch(arr, mid + 1, high);
	}

}