<<<<<<< HEAD
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
=======
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
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
