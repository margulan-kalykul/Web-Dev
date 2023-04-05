def common_end(a, b):
    na = len(a)
    nb = len(b)
    return a[0] == b[0] or a[na-1] == b[nb-1]
