def end_other(a, b):
    if len(a) < len(b):
        c = a
        a = b
        b = c
    a = a.lower()
    b = b.lower()
    return a[-len(b):] == b
