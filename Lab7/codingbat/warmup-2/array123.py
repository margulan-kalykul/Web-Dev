def array123(nums):
    n = len(nums)
    for i in range(n-2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False
