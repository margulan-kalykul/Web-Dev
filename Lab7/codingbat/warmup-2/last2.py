def last2(str):
    last = str[-2:]
    n = len(str)
    cnt = 0
    for i in range(n - 2):
        if str[i:i + 2] == last:
            cnt += 1
    return cnt
