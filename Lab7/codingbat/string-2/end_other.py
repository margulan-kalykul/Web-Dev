<<<<<<< HEAD
def end_other(a, b):
    if len(a) < len(b):
        c = a
        a = b
        b = c
    a = a.lower()
    b = b.lower()
    return a[-len(b):] == b
=======
def end_other(a, b):
    if len(a) < len(b):
        c = a
        a = b
        b = c
    a = a.lower()
    b = b.lower()
    return a[-len(b):] == b
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
