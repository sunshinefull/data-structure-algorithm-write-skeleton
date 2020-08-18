class BinarySearchTree {
  constructor() {
  }
  insert(key) {}
  insertNode(node, key) {}
  getRoot() {}
  search(key) {}
  searchNode(node, key) {}
  inOrderTraverse(callback) {}
  inOrderTraverseNode(node, callback) {}
  preOrderTraverse(callback) {}
  preOrderTraverseNode(node, callback) {}
  postOrderTraverse(callback) {}
  postOrderTraverseNode(node, callback) {}
  min() {}
  minNode(node) {}
  max() {}
  maxNode(node) {}
  remove(key) {}
  removeNode(node, key) {}
  //给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。说明: 叶子节点是指没有子节点的节点。
  hasPath(sum){
    return this.hasPathSum(this.root,sum)
  }
  hasPathSum(node,sum){
    if(node==null) return false
    let cur=sum-node.key
    if(node.left==null&&node.right==null&&cur==0) return true
    if(node.left==null) return this.hasPathSum(node.right,cur)
    if(node.right==null) return hasPathSum(node.left,cur)
    return this.hasPathSum(node.left,cur) || this.hasPathSum(node.right,cur)
  }
  minDepth(){
    return this.minDepthNode(this.root)
  }
  minDepthNode(node){
    if(!node) return 0
    if(!node.left&&!node.right) return 1
    if(!node.left) return this.minDepthNode(node.right)+1
    if(!node.right) return this.minDepthNode(node.left)+1
    return Math.min(this.minDepthNode(node.left),this.minDepthNode(node.right))
  }
  maxDepth(){
    return this.maxDepthNode(this.root)
  }
  maxDepthNode(node){
    if(!node) return 0
    let leftDepth=this.maxDepthNode(node.left)
    let rightDepth=this.maxDepthNode(node.right)
    return Math.max(leftDepth,rightDepth)+1
  }
}