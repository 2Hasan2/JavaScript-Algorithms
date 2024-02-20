
// A* algorithm implementation
function astar(start, goal, map) {
	// Create nodes for each cell in the map
	const nodes = createNodes(map);

	// Open and closed lists
	const openList = [];
	const closedList = [];

	// Add start node to open list
	openList.push(nodes[start.row][start.col]);

	while (openList.length > 0) {
		// Get node with lowest f cost from open list
		let currentNode = openList[0];
		for (let i = 1; i < openList.length; i++) {
			if (openList[i].f < currentNode.f || (openList[i].f === currentNode.f && openList[i].h < currentNode.h)) {
				currentNode = openList[i];
			}
		}

		// Remove current node from open list
		openList.splice(openList.indexOf(currentNode), 1);

		// Add current node to closed list
		closedList.push(currentNode);

		// Check if current node is the goal
		if (currentNode.row === goal.row && currentNode.col === goal.col) {
			return reconstructPath(currentNode);
		}

		// Generate neighbors of current node
		const neighbors = getNeighbors(currentNode, nodes, map);

		neighbors.forEach(neighbor => {
			// Skip neighbor if it is in the closed list or is an obstacle
			if (closedList.includes(neighbor) || neighbor.isObstacle) {
				return;
			}

			// Calculate tentative g score
			const tentativeG = currentNode.g + 1;

			// Add neighbor to open list if it is not there
			if (!openList.includes(neighbor)) {
				openList.push(neighbor);
			} else if (tentativeG >= neighbor.g) {
				// Skip neighbor if it is already in the open list with a lower g score
				return;
			}

			// Update neighbor's properties
			neighbor.parent = currentNode;
			neighbor.g = tentativeG;
			neighbor.h = heuristic(neighbor, goal);
			neighbor.f = neighbor.g + neighbor.h;
		});
	}

	// No path found
	return null;
}

// Create nodes for each cell in the map
function createNodes(map) {
	const nodes = [];
	for (let i = 0; i < map.length; i++) {
		nodes.push([]);
		for (let j = 0; j < map[i].length; j++) {
			nodes[i].push({
				row: i,
				col: j,
				isObstacle: map[i][j] === 1,
				parent: null,
				g: Infinity,
				h: Infinity,
				f: Infinity
			});
		}
	}
	return nodes;
}

// Get neighboring nodes of a given node
function getNeighbors(node, nodes, map) {
	const neighbors = [];
	const { row, col } = node;

	// Left neighbor
	if (col > 0) {
		neighbors.push(nodes[row][col - 1]);
	}
	// Right neighbor
	if (col < nodes[0].length - 1) {
		neighbors.push(nodes[row][col + 1]);
	}
	// Top neighbor
	if (row > 0) {
		neighbors.push(nodes[row - 1][col]);
	}
	// Bottom neighbor
	if (row < nodes.length - 1) {
		neighbors.push(nodes[row + 1][col]);
	}

	return neighbors;
}

// Heuristic function (Euclidean distance)
function heuristic(node, goal) {
	return Math.sqrt((node.row - goal.row) ** 2 + (node.col - goal.col) ** 2);
}

// Reconstruct path from goal to start
function reconstructPath(node) {
	const path = [];
	let currentNode = node;
	while (currentNode !== null) {
		path.unshift(currentNode);
		currentNode = currentNode.parent;
	}
	return path;
}
