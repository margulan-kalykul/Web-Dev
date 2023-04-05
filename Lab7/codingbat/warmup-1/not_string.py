def not_string(str):
    res = ''
    if str[:3] == 'not':
        res = str
    else:
        res = 'not ' + str
    return res
