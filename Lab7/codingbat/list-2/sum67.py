def sum67(nums):
    sum = 0
    was = False
    for i in nums:
        if not was and i != 6:
            sum += i
        elif i == 6:
            was = True
        elif was and i == 7:
            was = False
    return sum
