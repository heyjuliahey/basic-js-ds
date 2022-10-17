const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    let node = new Node(data);

    if(!this.root1) {
      this.root1 = node;
      return;
    }

    let current = this.root1;
    while(current) {
      if(data < current.data) {
        if(!current.left) {
          current.left = node; 
          return;
        }
          current = current.left;
      }
      else {
        if(!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let flag = false;

    function traverse(current) {
      if(current === null || current === undefined)
        return flag;

      if(current.data == data)
      flag = true;
      
      if(current.left)
      traverse(current.left);
      
      if(current.right)
      traverse(current.right);
    }
    traverse(this.root1);
    return flag;
  }

  find(data) {
    let res = null;

    function traverse(current) {
      if(current.data == data)
      res = current;
      
      if(current.left)
      traverse(current.left);
      
      if(current.right)
      traverse(current.right);
    }
    traverse(this.root1);
    
    return res;
  }

  remove(data) {
    const removeNode = (node, data) => {
        if(!node) {
          return null;
        }
        
        if(node.data == data) { //found the node to remove
          if(!node.left && !node.right) { //the node has no children
            return null;
          }

          if(!node.left) {
            return node.right;
          }

          if(!node.right) {
            return node.left;
          }

          let temp = node.right;
          let parent = null;

          while(temp.left) {
            parent = temp;
            temp = temp.left; 
          }

          node.data = temp.data;
          if(!parent) {
            node.right = temp.right;
          }
          else if (!parent.left.right) {
            parent.left = null;
          }
          else {
            parent.left = temp.right;
          }
        }

        else if(data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        }
        node.right = removeNode(node.right, data);
        return node;
    }
    this.root1 = removeNode(this.root1, data);
  }

  min() {
      let min = this.root1;
      while(min.left)
      min = min.left;
      
      return min.data;
  }

  max() {
      let max = this.root1;
      while(max.right)
      max = max.right;
      return max.data;
  }
}
module.exports = {
  BinarySearchTree
};
