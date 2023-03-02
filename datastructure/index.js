// 线性表
// 可以这样理解，即“把所有数据用一根线儿串起来，再存储到物理空间中”。
// 具有“一对一”关系的数据，采用线性表将其储存到物理空间中。
// algorithm-visualizer
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show() {
    return this.data
}

// 使用BST来表示二叉查找树
function BST() {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
}

function insert(data) {
    let item = new Node(data, null, null)
    if (this.root === null) {
        this.root = item
    } else {
        let current = this.root
        let parent;
        while(true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current === null) {
                    parent.left = item
                    break;
                }
            } else {
                current = current.right
                if (current === null) {
                    parent.right = item;
                    break;
                }
            }
        }
    }
}

// 遍历二叉树的方式： 中序、先序和后序
function inOrder(node) {
    if (!(node === null)) {
        inOrder(node.left);
        document.write(node.show() + " ")
        inOrder(node.right)
    }
}

let nums = new BST()
nums.insert(23)
nums.insert(3)
nums.insert(16)
nums.insert(37)
nums.insert(45)
nums.insert(99)
nums.insert(22)
inOrder(nums.root)