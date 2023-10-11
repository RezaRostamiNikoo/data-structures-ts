class Tree<T> {
    private _root: TreeNode<T>;
    constructor() {
    }


    /**
     * it traverse all the treenodes - Breadth-First Search
     * @param {(node:TreeNode<T>):void} callback 
     */
    traverseBF(callback: (node: TreeNode<T>) => void) {
        const arr: Array<TreeNode<T>> = [this._root];
        while (arr.length) {
            const node: TreeNode<T> = arr.shift() as TreeNode<T>;
            arr.push(...node.children);
            callback(node);
        }
    }

    /**
     * it traverse all the treenodes - Depth-First Search
     * @param {(node:TreeNode<T>):void} callback 
     */
    traverseDF(callback: (node: TreeNode<T>) => void) {
        const arr = [this._root];
        while (arr.length) {
            const node: TreeNode<T> = arr.shift() as TreeNode<T>
            arr.unshift(...node.children);
            callback(node);
        }
    }
}