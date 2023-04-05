<<<<<<< HEAD
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
=======
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
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
