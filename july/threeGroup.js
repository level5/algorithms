

function groups(start, end)
{
	var group = {};
	var gap = parseInt(end - start / 2);

	for (var i = 1; i <= gap; i++) 
	{
		for (var j = start; j <= end; j++)
		{
			var first = j;
			var second = first + i;
			var third = second + i;

			var sq = third*third - second*second - first*first;

			if (sq >= start && sq <= end) {
				group[sq] = (group[sq] || 0) + 1;
			}
		}
	}

	console.log(group);
}

exports.groups = function (start, end)
{
	groups(start, end);
};

//空间复杂度太大，是否可以对所有可能的N进行递归。然后对每个最大值计算可能的等差大小。复杂度还是n^2,但是空间复杂度是1

