var shift = require('./shiftChars');


var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift1(arr, 3);
console.log("way 1:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift2(arr, 3);
console.log("way 2:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift3(arr, 3);
console.log("way 3:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift4(arr, 3);
console.log("way 4:", arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
shift.leftShift5(arr, 3);
console.log("way 5:", arr);



var math = require('./math');

console.log('sum of max sub:', math.maxSub([1, -2, 3, 10, -4, 7, 2, -5]));
console.log('sum of max sub 2:', math.maxSub2([1, -2, 3, 10, -4, 7, 2, -5]));

console.log('sum of max sub:', math.maxSub([-1, -2, -3, -10, -4, -7, -2, -5]));
console.log('sum of max sub 2:', math.maxSub2([-1, -2, -3, -10, -4, -7, -2, -5]));


var lcs = require('./lcs');

var str1 = 'BDCACFKOIOWE';
var str2 = 'ABCEIIKIACVX';

var time = new Date().getTime();
console.log('lcs:', lcs.lcs(str1, str2));
var now = new Date().getTime();
console.log('cost:', now - time);

var time = new Date().getTime();
console.log('lcs2:', lcs.lcs2(str1, str2));
var now = new Date().getTime();
console.log('cost:', now - time);

var group = require('./threeGroup');
group.groups(1, 30);

function compareArrays(arr1, arr2)
{
	if (!arr1 || !arr2 || arr1.length !== arr2.length) 
	{
		return false;
	}

	for (var i = 0; i < arr1.length; i++)
	{
		if (arr1[i] !== arr2[i])
		{
			return false;
		}
	}
	return true;
}

function logExecuteTime(func, that, arg)
{
	var start = new Date().getTime();
	var  result = func.call(that, arg);
	var time = new Date().getTime() - start;
	console.log("it spent", time, "to execute this function");
	return result;
}

var primes = require('./primes');
//var listOfPrimes = logExecuteTime(primes.getPrimes, primes, 100000);

//var listOfPrimes2 = logExecuteTime(primes.getPrimes2, primes, 100000);
//console.log(compareArrays(listOfPrimes, listOfPrimes2));
//console.log('primes between 0 and 1000 are:', listOfPrimes);

//var listOfPrimes2 = logExecuteTime(primes.getPrimes3, primes, 10000000);
//console.log(compareArrays(listOfPrimes, listOfPrimes2));

var listOfPrimes2 = logExecuteTime(primes.getPrimes4, primes, 10000000);

var listOfPrimes2 = logExecuteTime(primes.getPrimes5, primes, 10000000);

