def count_combinations(products):
    combinations = 0

    for i in range(len(products)):
        for j in range(i + 1, len(products)):
            if products[i] == products[j]:
                combinations += 1

    return combinations

# Tests


products1 = [1, 3, 1, 1, 2, 3]
print(count_combinations(products1))  # Resultado esperado: 4

products2 = [1, 1, 2, 3]
print(count_combinations(products2))  # Resultado esperado: 1
