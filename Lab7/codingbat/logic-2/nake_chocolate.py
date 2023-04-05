<<<<<<< HEAD
def make_chocolate(small, big, goal):
    need5 = min(big, goal // 5)
    if big * 5 + small < goal or goal - need5 * 5 > small:
        return -1
    return goal - need5 * 5
=======
def make_chocolate(small, big, goal):
    need5 = min(big, goal // 5)
    if big * 5 + small < goal or goal - need5 * 5 > small:
        return -1
    return goal - need5 * 5
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
