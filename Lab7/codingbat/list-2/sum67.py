<<<<<<< HEAD
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
=======
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
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
