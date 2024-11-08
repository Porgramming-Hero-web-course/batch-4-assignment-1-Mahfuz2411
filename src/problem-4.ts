{
  interface Circle {
    shape: "circle",
    radius: number
  };

  interface Rectangle {
    shape: "rectangle",
    width: number,
    height: number,
  }

  type GivenShape = Circle | Rectangle;
  const calculateShapeArea = (shape: GivenShape): number => {
    let area: number = 0;
    if(shape.shape === "rectangle") area = shape.height * shape.width;
    if (shape.shape === "circle") area = Math.PI * shape.radius * shape.radius;
    
    return parseFloat(area.toFixed(2));
  }



  // Sample Input 1:
  // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  // Sample Output 1:
  // 78.54;

  // Sample Input 2:
  // const rectangleArea = calculateShapeArea({
  //   shape: "rectangle",
  //   width: 4,
  //   height: 6,
  // });
  // console.log(circleArea, rectangleArea);

  // Sample Output 2:
  // 24;
}
