class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        //if(s.length % 2 !== 0 || s[0] == "]"|| s[0] == "}"|| s[0] == ")"){
        //    return false;
        //}

        const stack = [];
        const closeToOpen = {  
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s){
            if(closeToOpen[c]) {
                if(stack.length > 0 && stack[stack.length - 1] 
                === closeToOpen[c]){
                   stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            } 
        }
        //return true;
        return stack.length === 0;
    }
}
