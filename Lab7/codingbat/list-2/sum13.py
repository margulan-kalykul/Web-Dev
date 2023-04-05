def sum13(nums):
    sum = 0
    was = False
    for i in nums:
        if not was and i != 13:
            sum += i
        elif i == 13:
            was = True
        else:
            was = False
    return sum
