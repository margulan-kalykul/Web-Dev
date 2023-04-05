def front_back(str):
    n = len(str) - 1
    if n + 1 <= 1:
        return str
    return str[n] + str[1:-1] + str[0]
