impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
         let mut seen = HashSet::new();
         for &num in &nums {
            //HashSet::insert returns a bool,
            //true if the value was not already present (and got inserted)
            //false if it was already present (no change made).
            if !seen.insert(num) {
                return true;
            }
         }
         false
    }
}
