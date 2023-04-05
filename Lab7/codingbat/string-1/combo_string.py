def combo_string(a, b):
    if len(a) > len(b):
        longer = a
        shorter = b
    else:
        longer = b
        shorter = a
    return shorter + longer + shorter
