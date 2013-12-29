/*
 * 两条装配线，进入时间为e[i]， 经过每个装配点的时间是a[i,j], 离开装配线去另外一条的时间t[i,j]，装配完成的时间是x[i]。
 *
 *
 */

 function fastWay(a1, a2, t1, t2, e1, e2, x1, x2, n)
 {
 	var f1 = [];
 	var f2 = [];

 	var l1 = [];
 	var l2 = [];
 	var result, l;

 	f1[0] = e1 + a1[0];
 	f2[0] = e2 + a2[0];

 	for (var i = 1; i < n; i++) 
 	{
 		if (f1[i-1] + a1[i] < f2[i-1] + t2[i-1] + a1[i])
 		{
 			f1[i] = f1[i-1] + a1[i];
 			l1[i] = 1;
 		} else 
 		{
 			f1[i] = f2[i-1] + t2[i-1] + a1[i];
 			l1[i] = 2;
 		}

 		if (f2[i-1] + a2[i] < f1[i-1] + t1[i-1] + a1[i])
 		{
 			f2[i] = f2[i-1] + a1[i];
 			l2[i] = 2;
 		} else 
 		{
 			f2[i] = f1[i-1] + t1[i-1] + a1[i];
 			l2[i] = 1;
 		}
 	}

 	if (f1[n-1] + x1 <= f2[n-1] + x2) 
 	{
 		result = f1[n-1] + x1;
 		l = 1;
 	} else 
 	{
 		result = f2[n-1] + x2;
 		l = 2;
 	}

 	return [result, l, l1, l2];
 }

 function printStation(l1, l2, l, n)
 {
 	for (var i = n; i > 1; i--)
 	{
 		console.log("The", n, "station is on line", l);
 		if (l === 1) 
 		{
 			l = l1[n-1];
 		} else 
 		{
 			l = l2[n-1]; 
 		}
 	}
 	console.log("The 1 station is on line", l);
 }

 function printStation2(l1, l2, l, n)
 {
 	if (l === 1) 
 	{
 		printStation2(l1, l2, l1[n-1], n-1);
 	} else
 	{
 		printStation2(l1, l2, l2[n-1], n-1);
 	}
 	console.log("The", n, "station is on line", l);
 }