// 集合S和整数x，判断S中是否存在两个元素，他们的和是x

var sort = require('./sort');

// O(sqrt n)
exports.isExist = function (arr, x)
{
	for( var i = 0;  i < arr.length; i++) 
	{
		for (var j = i + 1; j < arr.length; j++) 
		{
			if (arr[i] + arr[j] === x){
				return true;
			}
		}
	}
	return false;
}

// 
exports.isExist2 = function (arr, x) 
{
	var cp = arr.slice(0, arr.length);
	sort.mergeSort(cp);

	var i = 0, j = cp.length - 1;
	while (cp[i] + cp[j] !== x && i !== j) 
	{
		if (cp[i] + cp[j] > x) {
			j--;
		} else {
			i++;
		}
	}
	if (cp[i]+cp[j] === x) {
		return true;
	} else {
		return false;
	}
}