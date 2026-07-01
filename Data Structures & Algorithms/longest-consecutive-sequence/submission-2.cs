public class Solution {
    public int LongestConsecutive(int[] nums) {
        
        HashSet<int> numSet = new HashSet<int>(nums);
        int longest = 0;

        //Check if any num in numsSet has its (num-1) element, if not, it's a start of a sequence. 
        //Then try to find all the num + 1(num + length) elements.
        //Return the longest length or default length 1. 

        foreach(int num in numSet){
            if(!numSet.Contains(num - 1)) {
                int length = 1;
                while (numSet.Contains(num + length)){
                    length ++; 
                }
                longest = Math.Max(longest, length);
            }
        }
        return longest;
    }
}
