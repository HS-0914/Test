def solution(clothes):
    types = {}
    total = 1
    for _, type in clothes:
        print(_)
        types[type] = (types.get(type) or 0) + 1

        # if (type not in types):
        #     types[type] = 0
        # types[type] = types[type] + 1

    for key in types:
        total = total * (types.get(key)+1)
    return total-1
