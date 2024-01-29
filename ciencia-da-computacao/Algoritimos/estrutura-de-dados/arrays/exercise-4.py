def students_in_library(entries, exits, searched_instant):
    students_present = 0

    for i in range(len(entries)):
        entry = entries[i]
        exit_time = exits[i]

        if entry <= searched_instant <= exit_time:
            students_present += 1

    return students_present

# Test


entries = [1, 2, 3]
exits = [3, 2, 7]
searched_instant = 4
print(students_in_library(entries, exits, searched_instant))  # Resultado: 1
