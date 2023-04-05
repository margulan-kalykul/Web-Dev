def string_bits(str):
    res = ''
    n = len(str)
    for i in range(0, n, 2):
        res += str[i]
    return res
