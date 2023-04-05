def big_diff(nums):
    mx = mn = nums[0]
    for i in nums:
        mx = max(mx, i)
        mn = min(mn, i)
    return mx - mn
