<<<<<<< HEAD
def make_bricks(small, big, goal):
    if big * 5 + small < goal:
        return False
    need5 = min(big, goal // 5)
    if goal - need5 * 5 <= small:
        return True
    else:
        return False
=======
def make_bricks(small, big, goal):
    if big * 5 + small < goal:
        return False
    need5 = min(big, goal // 5)
    if goal - need5 * 5 <= small:
        return True
    else:
        return False
>>>>>>> 84956c9bb3f2146b8640d69afc22e4f6c97df780
