/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    //Iteration

    mergeTwoLists(list1, list2) {

        const dummy = { val: 0, next: null }
        let node = dummy;

        while(list1 && list2) {

             if(list1.val < list2.val) {
                node.next = list1;
                list1 = list1.next;
             } else {
                node.next = list2;
                list2 = list2.next
             }
             node = node.next;
        }
        
        //attaches the head of that remaining chain 
        if (list1){
            node.next = list1;
        } else {
            node.next = list2;
        }
        
        // real head: { val: 1, next: {...} }
        return dummy.next;
    }
}
