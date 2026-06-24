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
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        
        ListNode dummy = new ListNode(0);
        ListNode node = dummy;

        while(list1 != null && list2 != null) {
            
            if(list1.val < list2.val){
                node.next = list1;
                list1 = list1.next;
            } else {
                node.next = list2; 
                list2 = list2.next;
            }
            node = node.next;
        }

        //handles two edge cases:
        //One list is exhausted — attaches the remaining nodes from the other list
        //Both lists are exhausted — the else sets node.next = list2 which is null, cleanly terminating the list
        if(list1 != null){
            node.next = list1;
        } else {
            node.next = list2;
        }

        return dummy.next;
    }
}