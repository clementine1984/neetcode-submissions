class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // rows
        for (let i = 0; i < board.length; i++) {
            let set = new Set();
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];
                if (val === ".") continue;
                if (set.has(val)) return false;
                set.add(val);
            }
        }

        // columns
        for (let j = 0; j < board[0].length; j++) {
            let set = new Set();
            for (let i = 0; i < board.length; i++) {
                const val = board[i][j];
                if (val === ".") continue;
                if (set.has(val)) return false;
                set.add(val);
            }
        }

        // 3x3 boxes
        const start = [0, 3, 6];
        for (let r of start) {
            for (let c of start) {
                let set = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const val = board[r + i][c + j];
                        if (val === ".") continue;
                        if (set.has(val)) return false;
                        set.add(val);
                    }
                }
            }
        }

        return true;
    }
}
