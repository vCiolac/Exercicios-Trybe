def communicating_servers(servers):
    rows, columns = len(servers), len(servers[0])
    sv_rows = [0 for _ in range(rows)]
    sv_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if servers[i][j] == 1:
                sv_rows[i] += 1
                sv_columns[j] += 1

    communicators = 0
    for i in range(rows):
        for j in range(columns):
            if servers[i][j] == 1 and (sv_rows[i] > 1 or sv_columns[j] > 1):
                communicators += 1

    return communicators

# Testes


servers1 = [[1, 0], [0, 1]]
print(communicating_servers(servers1))  # Resultado: 0

servers2 = [[1, 0], [1, 1]]
print(communicating_servers(servers2))  # Resultado: 3

servers3 = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
print(communicating_servers(servers3))  # Resultado: 2
