bool hasDuplicates(char arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        if (arr[i] != '.') {
            for (int j = i + 1; j < size; j++) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

void printIntArray(char arr[], int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%c", arr[i]);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}

bool isValidSudoku(char** board, int boardSize, int* boardColSize) {
    char row_col[9];
    int idx = 0;   

    for (int x = 0; x < 9; x++) {
        if (hasDuplicates(board[x], 9)) {
            return false;
        }
    }

    for (int y = 0; y < 9; y++) {
        for (int z = 0; z < 9; z++) {
            row_col[z] = board[z][y];
        }
        if (hasDuplicates(row_col, 9))
            return false;
    }

    for (int sq = 0; sq < 9; sq += 3)
    {
        for (int row_start = 0; row_start < 9; row_start += 3) {
            idx = 0;
            for (int row = row_start; row < row_start + 3; row++) {
                for (int current = sq; current < sq + 3; current++) {
                    row_col[idx++] = board[row][current];
                }
            }
            if (hasDuplicates(row_col, 9))
                return false;
            printIntArray(row_col, 9);
            }
    }
    return true;
}