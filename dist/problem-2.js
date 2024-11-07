"use strict";
{
    const removeDuplicates = (arr) => {
        // const brr : MyArray = Array(5).fill(0);
        const brr = [];
        for (let i = 0; i < arr.length; i++) {
            if (brr.includes(arr[i]))
                continue;
            brr.push(arr[i]);
        }
        return brr;
    };
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
    /*
    ! note:  1. using set
    const uniqueArray1 = Array.from(new Set([1, 2, 2, 3, 4, 4, 5]));
    // or using spread operator
    const uniqueArray2 = [...new Set([1, 2, 2, 3, 4, 4, 5])];
  
    console.log(uniqueArray1);
    */
}
