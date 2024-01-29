def recursive_max(input_list):
    if not input_list:
        return None

    max_rest = recursive_max(input_list[1:])

    if max_rest is None or input_list[0] > max_rest:
        return input_list[0]
    else:
        return max_rest


numbers_list = [4, 2, 8, 1, 5, 7]

max_number = recursive_max(numbers_list)
print(f"O maior número na lista é: {max_number}")

def sum_recursive(n):
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)


result = sum_recursive(4)

print(result)