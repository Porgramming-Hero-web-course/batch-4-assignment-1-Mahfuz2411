{
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      const year = new Date().getFullYear();
      // console.log(year);
      return year - this.year;
    }
  }

  // Sample Input 1:
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());

  // Sample Output 1:
  // 6 (assuming current year is 2024)


}