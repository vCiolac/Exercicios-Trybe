def count_pairs(n_value):
    numbers = range(1, n_value + 1)
    pairs_count = [num for num in numbers if num % 2 == 0]
    return pairs_count


print(count_pairs(5))


def recursive_count_pairs_modified(n_value):
    if n_value == 1:
        return []

    result_value = recursive_count_pairs_modified(n_value - 1)

    if n_value % 2 == 0:
        result_value.append(n_value)

    return result_value


print(recursive_count_pairs_modified(5))
