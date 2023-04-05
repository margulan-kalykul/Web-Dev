def centered_average(nums):
    mx = mn = nums[0]
    sum = 0
    for i in nums:
        mx = max(mx, i)
        mn = min(mn, i)
        sum += i
    if mn == mx:
        sum -= mn
        n = len(nums) - 1
    else:
        sum -= (mx + mn)
        n = len(nums) - 2
    return sum // n
