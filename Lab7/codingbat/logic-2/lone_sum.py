def lone_sum(a, b, c):
    l = [a, b, c]
    sum = 0
    un = [0, 0, 0]
    for i in l:
        for j in range(3):
            if i == l[j] and un[j] == 0:
                un[j] = i
                break
            elif i == l[j]:
                un[j] = -1
                break
    for i in un:
        if i != -1:
          sum += i
    return sum
