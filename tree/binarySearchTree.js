// 二叉搜索树（BST）的实现
// 二叉搜索树是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
// 在右侧节点存储（比父节点）大（或者等于）的值。

function BinarySearchTree() {
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null; // 根节点

    /** 定义辅助函数部分*/
    let insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    // 中序遍历递归函数
    let inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    // 先序遍历递归函数
    let preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    // 后序遍历递归函数
    let postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    let minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    let maxNode = function(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    let searchNode = function(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    let removeNode = function(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else { // 键等于node.key
            // 第一种情况——一个叶节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // 第二种情况——一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // 第三种情况——一个有两个子节点的节点
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    let findMinNode = function(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    /**定义辅助函数部分结束 */

    this.insert = function(key) {
        let newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    // 通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    };

    // 通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    // 通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    };

    // 搜索一个特定的值
    this.search = function(key) {
        return searchNode(root, key);
    };

    // 搜索最小值
    this.min = function() {
        return minNode(root);
    };

    // 搜索最大值
    this.max = function() {
        return maxNode(root);
    };

    // 从树种移除某个键
    this.remove = function(key) {
        root = removeNode(root, key);
    };
}
// let tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);

// function printNode(value) {
//     console.log(value);
// }

// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);
// console.log(tree.min());
// console.log(tree.max());

// console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
// console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
// tree.remove(15);
// tree.inOrderTraverse(printNode);