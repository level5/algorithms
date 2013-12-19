// length of string is n, we want to shift m chars to end.
// 'abcde' - shift 3 chars -> 'deabc'



exports.leftShift = function (str, m)
{
	if (str.length <= m)
	{
		return;
	}

	return str.slice(m, str.length) + str.slice(0, m);
};


// ['a', 'b', 'c', 'd', 'e'] -> ['d', 'e', 'a', 'b', 'c']

function leftShiftOne(arr)
{
	var tmp = arr[0];
	for (var i = 1; i < arr.length; i++)
	{
		arr[i - 1] = arr[i];
	}
	arr[arr.length - 1] = tmp;
}

exports.leftShift1 = function (arr, m)
{
	if (m >= arr.length)
	{
		return;
	}

	for (var i = 0; i < m; i++)
	{
		leftShiftOne(arr);
	}
};


// 
function invert(arr, low, hight)
{
	while (low < hight)
	{
		var tmp = arr[low];
		arr[low] = arr[hight];
		arr[hight] = tmp;
	}
}

exports.leftShift2 = function (arr, m)
{
	invert(arr, 0, m - 1);
	invert(arr, m, arr.length - 1);
	invert(arr, 0, arr.length -1);
};

//
function dcp(m, n) 
{
	if (m%n === 0){
		return n;
	} else {
		return dcp (n, m%n);
	}
}

exports.leftShift3 = function (arr, m)
{
	if (m >= arr.length || m <= 0) 
	{
		return;
	}
	var d = dcp(arr.length, m);
	for (var i = 0; i < d; i++) 
	{
		var tmp = arr[i];
		var j;
		for (j = 0; j < arr.length/d - 1; j++)
		{
			arr[(i + j*m)%n] = arr[(i + (j+1)*m)%n];
		}
		arr[(i + j*m)%n] = tmp;
	}
};

exports.leftShift4 = function (arr, m)
{
	if (m >= arr.length || m <= 0) 
	{
		return;
	}
	var d = dcp(arr.length, m);
	for (var i = 0; i < d; i++) 
	{
		var tmp = arr[i];
		var j, last = i;
		for (j = (i + m)%n; j != n; j =(j + k)%n)
		{
			arr[last] = arr[j];
			last = j;
		}
		arr[last] = tmp;
	}
};

//

