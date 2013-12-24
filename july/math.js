//求一个数组中子数组的和最大的
exports.maxSub = function (arr)
{
	var help = [];
	for (var i = 0; i < arr.length; i++)
	{
		help[i] = 0;
	}

	var max = -Infinity;
	for (var i = 0; i < arr.length; i++)
	{
		for (var j = 0; j <= i; j++)
		{
			help[j] += arr[i];
			if (help[j] > max) 
			{
				max = help[j];
			}

		}
	}

	return max;
};

exports.maxSub2 = function (arr)
{
	var max = -Infinity;
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	var sum = 0;
	for (var i = 0; i < arr.length; i++)
	{
		sum += arr[i];

		if (sum > 0 && max < sum) {
			max = sum;
		} else if (sum < 0) {
			sum = 0;
		}
	}

	return max;
};

//DP
// 包含第i个元素的最大sum[i], 则sum[i+1] = max(sum[i] + a[i+1], a[i+1])
// result = max (result, sum[i+1])