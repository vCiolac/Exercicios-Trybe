def multiply_arrays(array1, array2):
    result = []
    total_iterations = 0

    for num1 in array1:
        print(f"Element in Array 1: {num1}")
        for num2 in array2:
            print(f"Element in Array 2: {num2}")
            result.append(num1 * num2)
            total_iterations += 1

    print(f"{total_iterations} iterations!")
    return result


n_value = 1000
arrays_to_multiply = list(range(1, n_value + 1))

multiply_arrays(arrays_to_multiply, arrays_to_multiply)
