def shuffle_cards(cards, cards_per_part):
    mid = len(cards) // 2
    part1 = cards[:mid]
    part2 = cards[mid:]

    result = []
    for i in range(max(len(part1), len(part2))):
        if i < len(part1):
            result.append(part1[i])
        if i < len(part2):
            result.append(part2[i])

    return result

# Testes


cards1 = [2, 6, 4, 5]
print(shuffle_cards(cards1, 2))  # Resultado esperado: [2, 4, 6, 5]
