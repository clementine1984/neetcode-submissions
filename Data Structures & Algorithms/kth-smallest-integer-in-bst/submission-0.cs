/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution {
    public int KthSmallest(TreeNode root, int k) {
        
        //Key: in-order traversal of a BST visits nodes in ascending order, 
        //so the k-th node visited is the k-th smallest.
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode curr = root;

        //Curr — the node currently exploring.
        //Stack — the nodes have passed through going left but haven't yet processed. 
        //they're waiting for you to come back and visit them.
        while(stack.Count > 0 || curr != null){
            while(curr != null) {
                stack.Push(curr);
                curr = curr.left;
            }
        
            curr = stack.Pop();
            k--;
            if(k == 0){
                return curr.val;
            }
            curr = curr.right;
        }
        return -1;
    }
}
