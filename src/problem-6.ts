{
  interface Profile {
    name: string;
    age: number;
    email: string;
  };

  const updateProfile = (pf: Profile, newPf: Partial<Profile>) => {
    return {...pf, ...newPf};
  };


  // Sample Input :
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  // Sample Output:
  // {
  //   name: "Alice",
  //   age: 26,
  //   email: "alice@example.com"
  // }
}