class WeightedGraph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.edges[vertex1].push({ vertex: vertex2, weight });
      this.edges[vertex2].push({ vertex: vertex1, weight });
    }
  
    dijkstra(startingVertex) {
      const distances = {};
      const visited = {};
      const queue = [];
  
      // Initialize distances and add the starting vertex to the queue
      for (const vertex of this.vertices) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
      }
      distances[startingVertex] = 0;
      queue.push({ vertex: startingVertex, distance: 0 });
  
      while (queue.length) {
        queue.sort((a, b) => a.distance - b.distance);
        const { vertex, distance } = queue.shift();
  
        if (!visited[vertex]) {
          visited[vertex] = true;
  
          for (const neighbor of this.edges[vertex]) {
            const newDistance = distances[vertex] + neighbor.weight;
            if (newDistance < distances[neighbor.vertex]) {
              distances[neighbor.vertex] = newDistance;
              queue.push({ vertex: neighbor.vertex, distance: newDistance });
            }
          }
        }
      }
  
      console.log("Shortest distances from", startingVertex + ":", distances);
    }
  }
  
  // Example usage:
  const weightedGraph = new WeightedGraph();
  
  weightedGraph.addVertex("A");
  weightedGraph.addVertex("B");
  weightedGraph.addVertex("C");
  weightedGraph.addVertex("D");
  weightedGraph.addVertex("E");
  
  weightedGraph.addEdge("A", "B", 4);
  weightedGraph.addEdge("A", "C", 2);
  weightedGraph.addEdge("B", "C", 5);
  weightedGraph.addEdge("B", "D", 10);
  weightedGraph.addEdge("C", "D", 3);
  weightedGraph.addEdge("D", "E", 7);
  
  console.log("Dijkstra's Shortest Path:");
  weightedGraph.dijkstra("A");
  