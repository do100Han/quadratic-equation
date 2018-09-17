module.exports = function solveEquation(equation) {
    var new_a = equation.replace(/\s/g, ''),
    arr = new_a.match(/(\-|\+)?[^\^](\d+)/g),
    a = parseInt(arr[0]),
    b = parseInt(arr[1]),
    c = parseInt(arr[2]),
    D = Math.pow(b, 2) - 4 * a * c,
    mas = [],
    x1 = Math.round((-b - Math.sqrt(D)) / (2 * a)),
    x2 = Math.round((-b + Math.sqrt(D)) / (2 * a));
    if (x1 < x2) {
      mas[0] = x1;
      mas[1] = x2;
    } else {
      mas[0] = x2;
      mas[1] = x1;
    }
  return mas;
}
