/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public bool HasCycle(ListNode head) {
        
        let slow = head;
        let fast = head;

        while (fast && fast.next){
            slow = head.next;
            fast = head.next.next;
            if(slow == fast){
                return true;
            }
        }

        return false;
    }
}
