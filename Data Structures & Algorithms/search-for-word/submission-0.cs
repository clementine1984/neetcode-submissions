public class Solution {
    private int ROWS, COLS;
    
    public bool Exist(char[][] board, string word) {

        ROWS = board.Length;
        COLS = board[0].Length;

        for(int r = 0; r < ROWS; r++){
            for(int c = 0; c < COLS; c++){
                if(Dfs(board, word, r, c, 0)){
                    return true;
                }
            }
        }
        
        return false;
    }

    private bool Dfs(char[][] board, string word, int r, int c, int i){
        //means every character from index 0 up through word.Length - 1 
        //has already been matched successfully. 
        if(i == word.Length) {
            return true;
        }
 
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS 
        || board[r][c] != word[i] || board[r][c] == '#'){
            return false; 
        }

        board[r][c] = '#'; // mark current cell as used
                bool res = Dfs(board, word, r + 1, c, i + 1) ||
                   Dfs(board, word, r - 1, c, i + 1) ||
                   Dfs(board, word, r, c + 1, i + 1) ||
                   Dfs(board, word, r, c - 1, i + 1);
        board[r][c] = word[i];
        return res;

    }
}
