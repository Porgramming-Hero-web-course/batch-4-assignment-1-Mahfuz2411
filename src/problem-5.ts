{
  const getProperty = <x, y extends keyof x > (obj: x, key: y) => {
    return obj[key];
  }


  // Sample Input:
  // const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));

  // Sample Output:
  // Alice;
}