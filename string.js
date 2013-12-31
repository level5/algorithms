// source 
// target


function equals(arr1, low1, arr2, low2, length)
{
	for (var i = 0; i < length; i++) 
	{
		if (arr1[low1 + i] !== arr2[low2 + i]){
			return false;
		}
	}
	return true;
}


exports.naiveMatch = function (source, target)
{
	var tl = target.length;
	var sl = source.length;

	for(var i = 0; i <= sl - tl; i++)
	{
		if (equals(source, i, target, 0, tl)) {
			console.log('Pattern occurs with shift', i);
		}
	}
};


//KMP
function computePrefix(arr)
{
	var m = arr.length;
	var k = -1; 
	var pi = [];
	pi[0] = -1;

	for (var i = 1; i < m; i++)
	{
		while (k >= 0 && arr[k + 1] !== arr[i])
		{
			k = pi[k];
		}

		if (arr[k + 1] === arr[i])
		{
			k += 1;
		}
		pi[i] = k;
	}

	return pi;
}

exports.matchKMP = function (source, target)
{
	var sl = source.length;
	var tl = target.length;
	var pi = computePrefix(target);

	var k = pi[0];
	for (var i = 0; i < sl; i++) 
	{
		while (k >= 0 && source[i] !== target[k + 1])
		{
			k = pi[k];
		}

		if (source[i] === target[k + 1])
		{
			k += 1;
		}

		if (k === tl - 1)
		{
			console.log("Pattern occurs with shift", i + 1 - tl);
			k = pi[k];
		}
	}
};



exports.firstNotRepeatChar = function (str)
{
	var count = {};
	for (var i = 0; i < str.length; i++)
	{
		count[str[i]] = (count[str[i]] || 0) + 1;
	}

	for (var i = 0; i < str.length; i++)
	{
		if (count[str[i]] === 1)
		{
			return str[i];
		}
	}
	return undefined;
};
