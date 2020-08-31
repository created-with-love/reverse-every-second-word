function reverse(str) {
  if (str.length === 0 || !str.trim()) {
    return "";
  }

  let firstArray = str.split(" ");
  let newArray = [];

  for (let i = 0; i < firstArray.length; i++) {
    if (i === 0 || i % 2 === 0) {
      newArray.push(firstArray[i]);
    } else {
      newArray.push(firstArray[i].split("").reverse().join(""));
    }
  }

  return newArray.join(" ");
}

// Test.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
// Test.assertEquals(reverse("I really don't like reversing strings!"), "I yllaer don't ekil reversing !sgnirts")
