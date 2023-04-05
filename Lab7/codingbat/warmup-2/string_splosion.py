def string_splosion(str):
    res = ''
    n = len(str)
    for i in range(1, n + 1):
        res += str[:i]
    return res
