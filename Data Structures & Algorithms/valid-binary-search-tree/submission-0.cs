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
    public bool IsValidBST(TreeNode root) {
        
        //long in C# is 64-bit, int is 32-bit. 
        //long.MinValue  <  int.MinValue  ≤  node.val  ≤  int.MaxValue  <  long.MaxValue
        return valid(root, long.MinValue, long.MaxValue);
    }

    public bool valid(TreeNode node, long left, long right) {
        //The null node is a valid BST.
        if(node == null) return true; 

        if(!(left < node.val && right > node.val)){
            return false;
        }

        //Node.val should be the new boundaries. 
        return valid(node.left, left, node.val) &&
               valid(node.right, node.val, right); 
    }
}
