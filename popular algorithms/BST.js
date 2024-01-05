class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertRecursively(this.root, newNode);
      }
    }
  
    _insertRecursively(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertRecursively(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertRecursively(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this._searchRecursively(this.root, value);
    }
  
    _searchRecursively(node, value) {
      if (!node || node.value === value) {
        return node;
      }
  
      if (value < node.value) {
        return this._searchRecursively(node.left, value);
      } else {
        return this._searchRecursively(node.right, value);
      }
    }
  
    inOrderTraversal(callback) {
      this._inOrderTraversalRecursively(this.root, callback);
    }
  
    _inOrderTraversalRecursively(node, callback) {
      if (node) {
        this._inOrderTraversalRecursively(node.left, callback);
        callback(node.value);
        this._inOrderTraversalRecursively(node.right, callback);
      }
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(20);
  
  console.log("In-Order Traversal:");
  bst.inOrderTraversal((value) => console.log(value));
  
  const searchResult = bst.search(7);
  console.log("Search Result for 7:", searchResult ? "Found" : "Not Found");
  