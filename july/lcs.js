/*
 *	字符串A, B。 求他们的最大子串。 不要求子串的元素在A, B中连续出现
 *
 *	1. 如果Ai === Bi, 则 MAX(i, i) = MAX(i-1, i-1) +１
 * 	2. 如果Ai !== Bi, 则 MAX(i, i) = max( MAX(i, i-1), MAX(i-1, i))
 * 		a. Ai为子串的最后一个元素，
 *		b. Bi为子串的最后一个元素。
*/

function lcs(str1, index1, str2, index2)
{
	if (index1 < 0 || index2 < 0)
	{
		return [];
	}

	if (str1[index1] === str2[index2])
	{
		return lcs(str1, index1 - 1, str2, index2 - 1).concat(str1[index1]);
	} else 
	{
		var max1 = lcs(str1, index1, str2, index2 - 1);
		var max2 = lcs(str1, index1 - 1, str2, index2);

		if (max1.length > max2.length)
		{
			return max1;
		} else 
		{
			return max2;
		}
	}
};

exports.lcs = function (str1, str2)
{
	return lcs(str1, str1.length - 1, str2, str2.length - 1)
};


function lcs2(str1, index1, str2, index2)
{
	if (index1 < 0 || index2 < 0)
	{
		return [];
	}

	if (lcs[index1 + '-' + index2]) 
	{
		return lcs[index1 + '-' + index2];
	}

	var result;
	if (str1[index1] === str2[index2])
	{
		result = lcs2(str1, index1 - 1, str2, index2 - 1).concat(str1[index1]);
	} else 
	{
		var max1 = lcs2(str1, index1, str2, index2 - 1);
		var max2 = lcs2(str1, index1 - 1, str2, index2);

		if (max1.length > max2.length)
		{
			result = max1;
		} else 
		{
			result = max2;
		}
	}

	lcs[index1 + '-' + index2] = result;
	return result;
};


exports.lcs2 = function (str1, str2)
{
	return lcs2(str1, str1.length - 1, str2, str2.length - 1)
};


//
