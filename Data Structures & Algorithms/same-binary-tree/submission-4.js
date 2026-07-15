/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        
        let queue = [[p,q]];

        while (queue.length) {

            let [pNode, qNode] = queue.shift();

            if (!pNode && !qNode) continue;
            if (!pNode || !qNode ||pNode.val !== qNode.val) return false;

            queue.push([pNode.left, qNode.left]);
            queue.push([pNode.right, qNode.right]);
        }

        return true;
        
    }
}
