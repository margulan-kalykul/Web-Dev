<<<<<<< HEAD
def last2(str):
    last = str[-2:]
    n = len(str)
    cnt = 0
    for i in range(n - 2):
        if str[i:i + 2] == last:
            cnt += 1
    return cnt
=======
def last2(str):
    last = str[-2:]
    n = len(str)
    cnt = 0
    for i in range(n - 2):
        if str[i:i + 2] == last:
            cnt += 1
    return cnt
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
