def make_bricks(small, big, goal):
    if big * 5 + small < goal:
        return False
    need5 = min(big, goal // 5)
    if goal - need5 * 5 <= small:
        return True
    else:
        return False
