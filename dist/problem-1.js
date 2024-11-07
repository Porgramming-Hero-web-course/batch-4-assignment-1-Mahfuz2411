"use strict";
{
    // my codeeee
    const sumArray = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++)
            sum += arr[i];
        return sum;
    };
    // console.log(sumArray([1, 2, 5]));
    /*  learned
    const sumArray = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0);
    ! note: The reduce function takes a callback function and  an initial value
    */
}
