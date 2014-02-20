function Digraph (v)
{
	this.v = v;
	this.edgeTo = new Array[v];
	for (var i = 0; i < this.edgeTo.length; i++)
	{
		this.edgeTo[i] = [];
	}
}

function Edge (u, v, w)
{
	this.start = u;
	this.end = v;
	this.weight = w;
}

Digraph.prototype.addEdge = function (edge)
{
	this.edgeTo[edge.start].push(edge); 
};

Digraph.prototype.getAdjacence = function (v)
{
	return this.edgeTo[v];
};

Digraph.prototype.reverse = function ()
{
	var d = new Digraph(this.v);
	for (var i = 0; i < v; i++)
	{
		var edges = this.getAdjacence(i);
		for (var j = 0; j < edges.length; j++)
		{
			var edge = edges[j];
			d.addEdge(new Edge(edge.end, edge.start, edge.weight));
		}
	}
};
