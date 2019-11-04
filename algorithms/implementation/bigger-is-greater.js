function biggerIsGreater(w) {

    let a = w.split(""),
        l = a.length,
        i = l - 1;

    while (i > 0 && a[i - 1] >= a[i])
        i--;

    if (i <= 0)
        return "no answer";

    let j = l - 1;

    while (a[j] <= a[i - 1])
        j--

    [a[i - 1], a[j]] = [a[j], a[i - 1]]

    j = l - 1;

    while (i < j) {
        [a[i], a[j]] = [a[j], a[i]]
        i++;
        j--;
    }

    return a.join("");
}

console.log(biggerIsGreater("hefg"))
