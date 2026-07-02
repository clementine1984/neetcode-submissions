public class Solution {
    public int Search(int[] nums, int target) {
        
        int l = 0, r = nums.Length - 1; 

        while(l <= r){
            int mid = (l + r) / 2;
            if (target == nums[mid]) return mid;

          //Left portion is sorted.
          if(nums[l] <= nums[mid]){
              //Target is outside the range
              if(target > nums[mid] || target < nums[l]) {
                l = mid + 1;
              //Target is inside the range
              } else {
                r = mid - 1;
              }  
          } 
          //Right portion is sorted
          else if (target < nums[mid] || target > nums[r]) {
            //Target is outside the range
            r = mid - 1; 
          } else {
            //Target is inside the range
            l = mid + 1;
          }
        }
       return -1; 
    }
}
