<<<<<<< HEAD
def cat_dog(str):
    cntcat = 0
    cntdog = 0
    for i in range(len(str)-2):
        if str[i:i+3] == 'cat':
            cntcat += 1
        if str[i:i+3] == 'dog':
            cntdog += 1
    return cntcat == cntdog
=======
def cat_dog(str):
    cntcat = 0
    cntdog = 0
    for i in range(len(str)-2):
        if str[i:i+3] == 'cat':
            cntcat += 1
        if str[i:i+3] == 'dog':
            cntdog += 1
    return cntcat == cntdog
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
