{
  /*
  ! learnings: extends object means x can only be an object type.
  */
  const validateKeys = <x extends object> (obj: x, keys: (keyof x)[]) => {
    for (const key of keys) 
      if (!(key in obj)) 
        return false;
    return true;
  }


  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  // Sample Output:
  // true;
}