/*
 * 对于节点 如果Y在X的左子树上，有 key(Y) <= key(X)
 * 对于节点 如果Y在X的右子树上，有 key(Y) >= key(X)
 *
 */
function TreeNode (data)
{
	this.parent = undefined;
	this.leftChild = undefined;
	this.rightChild = undefined;

	this.data = data;
}


// search
function treeSearch(tree, k)
{
	if (tree === undefined || k === tree.data)
	{
		return tree;
	}

	if (k < tree.data) 
	{
		return treeSearch(tree.leftChild, k);
	} else 
	{
		return treeSearch(tree.rightChild, k);
	}
}

function IterativeTreeSearch (tree, k)
{
	while (tree !== undefined && k !== tree.data)
	{
		if (k < tree.data)
		{
			tree = tree.leftChild;
		} else 
		{
			tree = tree.rightChild;
		}
	}

	return tree;
}

//Minimum
function minimum(tree)
{
	while (tree.leftChild !== undefined)
	{
		tree = tree.leftChild;
	}
	return tree;
}
// Maximum
function maximum(tree)
{
	while (tree.rightChild !== undefined)
	{
		tree = tree.rightChild;
	}
	return tree;
}

//successor
function successor(tree)
{
	if (tree.rightChild !== undefined)
	{
		return minimum(tree.rightChild);
	}

	var parent = tree.parent;
	while (parent != undefined && parent.rightChild === tree) 
	{
		tree = parent;
		parent = parent.parent;
	}
	return parent;
}
// pre-successor
function presuccessor(tree)
{
	if (tree.leftChild !== undefined)
	{
		return maximum(tree.leftChild);
	}

	var parent = tree.parent;
	while (parent !== undefined && parent.leftChild == tree)
	{
		tree = parent;
		parent = parent.parent;
	}
	return parent;
}

// insert
function insert(tree, node)
{
	var p = undefined;
	var r = tree;

	while (r !== undefined)
	{
		p = r;
		if (node.data < r.data)
		{
			r = r.leftChild;
		} else 
		{
			r = r.rightChild;
		}
	}

	node.parent = p;

	if (p !== undefined) 
	{
		if (node.data < p.data) 
		{
			p.leftChild = node;
		} else
		{
			p.rightChild = node;
		} 
	}
}

// delete
function delete(tree, node)
{
	var y;
	if (node.rightChild === undefined || node.leftChild === undefined)
	{
		y = node;
	} else
	{
		y = successor(node);
	}


}