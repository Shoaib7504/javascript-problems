function temperatureConverter(temp, unit) {
  if (unit === "C") {
    return (temp * 9 / 5) + 32;
  }

  if (unit === "F") {
    return (temp - 32) * 5 / 9;
  }
}

console.log(temperatureConverter(25, "C")); // 77
console.log(temperatureConverter(77, "F")); // 25
