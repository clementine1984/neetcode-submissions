public class Solution {
    public bool IsValid(string s) {
        
        Stack<char> stack = new Stack<char>();

        Dictionary<char, char> dic = new Dictionary<char, char> {
            {')', '('},
            {']', '['},
            {'}', '{'},
        };

        foreach(char c in s) {
            if (dic.ContainsKey(c)) {
                //Stack.Peek() returns the object at the top of the Stack without removing it.
                if(stack.Count > 0 && dic[c] == stack.Peek()) {
                     stack.Pop();
                } else {
                    return false;
                }
            } else {
                stack.Push(c);
            }
        }
        //If return true; '((' will be valid 
        //as they'll be pushed into the stack and the loop finishes.
        return stack.Count == 0;
    }
}
