function isPrime (num)
{
	if (num === 1)
	{
		return false;
	}
	for (var i = 2; i < num; i++)
	{
		if (num%i === 0)
		{
			return false;
		}
	}
	return true;
}

function isPrime2 (num)
{
	var root = parseInt(Math.sqrt(num));
	for (var i = 2; i <= root; i++)
	{
		if (num%i === 0)
		{
			return false;
		}
	}
	return true;
}

function isPrime3 (num)
{
	for (var i = 2; i*i <= num; i++)
	{
		if (num%i === 0)
		{
			return false;
		}
	}
	return true;
}

exports.getPrimes = function (num)
{
	var result = [];
	for (var i = 2; i <= num; i++)
	{
		if (isPrime(i))
		{
			result.push(i);
		}
	}
	return result;
};


exports.getPrimes2 = function (num)
{
	var result = [];
	if (num >=2)
	{
		result.push(2);
	}
	for (var i = 3; i <= num; i += 2)
	{
		if (isPrime(i))
		{
			result.push(i);
		}
	}
	return result;
}

exports.getPrimes3 = function (num)
{
	var result = [];
	for (var i = 2; i <= num; i++)
	{
		if (isPrime2(i))
		{
			result.push(i);
		}
	}
	return result;
};

exports.getPrimes4 = function (num)
{
	var result = [];
	for (var i = 2; i <= num; i++)
	{
		if (isPrime3(i))
		{
			result.push(i);
		}
	}
	return result;
};

exports.getPrimes5 = function (num)
{
	var result = [];
	for (var i = 2; i <= num; i++)
	{
		if (isPrime4(i))
		{
			result.push(i);
		}
	}
	return result;
};