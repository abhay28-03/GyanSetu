def calculate_mastery(data):
    attempts = data["attempts"]
    if attempts == 0:
        return 0

    accuracy = data["correct"] / attempts
    independence = data["correct_without_hints"] / attempts
    avg_hints = data["total_hints_used"] / attempts
    hint_dependency = min(avg_hints / 3, 1)

    mastery = (
        0.5 * accuracy +
        0.3 * independence +
        0.2 * (1 - hint_dependency)
    ) * 100

    return round(mastery, 2)


def get_difficulty(mastery):
    if mastery < 40:
        return "easy"
    elif mastery < 70:
        return "medium"
    else:
        return "hard"