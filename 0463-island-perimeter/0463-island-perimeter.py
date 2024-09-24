class Solution(object):
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        ribs = 0
        rows = len(grid)
        columns = len(grid[0])

        for row in range(rows):
            for col in range(columns):
                if grid[row][col] == 1:
                    if row > 0:
                        if grid[row-1][col] == 0:
                            ribs += 1
                    else:
                        ribs += 1
                    if row < rows - 1:
                        if grid[row+1][col] == 0:
                            ribs += 1
                    else:
                        ribs += 1
                    if col > 0:
                        if grid[row][col-1] == 0:
                            ribs += 1
                    else:
                        ribs += 1
                    if col < columns - 1:
                        if grid[row][col+1] == 0:
                            ribs += 1
                    else:
                        ribs += 1
        return ribs 