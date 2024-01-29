def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1
            max_time = max(max_time, current_time)
        else:
            current_time = 0

    return max_time

# Testes


valores1 = [0, 1, 1, 1, 0, 0, 1, 1]


print(verify_max_time_ok(valores1))  # Resultado esperado: 3


valores2 = [1, 1, 1, 1, 0, 0, 1, 1]


print(verify_max_time_ok(valores2))  # Resultado esperado: 4
