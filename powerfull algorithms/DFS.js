class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    dfs(startingVertex, visited = {}) {
      if (!this.vertices.includes(startingVertex)) {
        console.log("Invalid starting vertex.");
        return;
      }
  
      if (!visited[startingVertex]) {
        console.log("Visited vertex:", startingVertex);
        visited[startingVertex] = true;
  
        for (const neighbor of this.edges[startingVertex]) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }
  
  // Example usage:
  const myGraph = new Graph();
  
  myGraph.addVertex("A");
  myGraph.addVertex("B");
  myGraph.addVertex("C");
  myGraph.addVertex("D");
  myGraph.addVertex("E");
  
  myGraph.addEdge("A", "B");
  myGraph.addEdge("B", "C");
  myGraph.addEdge("C", "D");
  myGraph.addEdge("D", "E");
  
  console.log("DFS Traversal:");
  myGraph.dfs("A");
  