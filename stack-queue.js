

function Stack (length) 
{
	this.arr = new Array(length);
	this.top = -1;
}

Stack.prototype.isEmpty = function ()
{
	if (this.top < 0) {
		return true;
	} else {
		return false;
	}
};

Stack.prototype.push = function (x)
{
	if (this.top < this.arr.length - 1) {
		this.arr[++this.top] = x;				
	} else {
		throw new Error('This stack is full.');
	}
};

stack.prototype.pop = function ()
{
	if (this.isEmpty()) {
		throw new Error('This stack is empty');
	}

	return this.arr[this.top--];
};

exports.getStack = function (length)
{
	return new Stack(length);
};


// head == tail empty;
// head == tail + 1 full;
function Queue(length)
{
	this.arr = new Array(length);
	this.head = 0;
	this.tail = 0;
	this.length = length;
}

Queue.prototype.enQueue = function (x)
{
	if (this.head == (this.tail + 1)%this.length)
	{
		throw new Error('This queue is full.');
	}

	this.arr[this.tail] = x;
	this.tail = (this.tail + 1)%this.length;
};

Queue.prototype.deQueue = function ()
{
	if (this.head == this.tail) 
	{
		throw new Error('This queue is empty.');
	}

	var result = this.arr[this.head];

	this.head = (this.head + 1)%this.length;
};

exports.getQueue = function (length)
{
	return new Queue(length);
};