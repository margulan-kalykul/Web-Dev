def make_chocolate(small, big, goal):
    need5 = min(big, goal // 5)
    if big * 5 + small < goal or goal - need5 * 5 > small:
        return -1
    return goal - need5 * 5
