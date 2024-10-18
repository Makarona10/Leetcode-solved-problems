class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        num = str(x)
        size = len(num)
        
        y = 0
        z = size - 1
        while (y < size):
            print(num[y], num[z])
            if (num[y] != num[z]):
                return False
            if (size % 2 == 0 and z - y == -1):
                return True
            if (size % 2 == 1 and z == y):
                return True
            z = z - 1
            y = y + 1
