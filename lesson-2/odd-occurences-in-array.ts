// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
//
// For example, in array A such that:
//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
//
//         the elements at indexes 0 and 2 have value 9,
//         the elements at indexes 1 and 3 have value 3,
//         the elements at indexes 4 and 6 have value 9,
//         the element at index 5 has value 7 and is unpaired.
//
// Write a function:
//
//     function solution(A: number[]): number;
//
// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
//
// For example, given array A such that:
//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
//
// the function should return 7, as explained in the example above.


function solution(A: number[]): number {
    let map: {[key: number]: boolean} = {};
    for (let i = 0; i < A.length; i++) {

        // jeśli wartość klucza jest równa "true" (to znaczy została już dodana), to wyrzuć klucz (co jest równoznaczne z wyrzuceniem poprzednio dodanej pary klucz wartość)
        if (map[A[i]]) {
            delete map[A[i]];
        // jeśli wartość pojawia się po raz pierwszy to dodaj ją do mapy 
        } else {
            map[A[i]] = true;
            console.log(map);
        }
    }
//The parseInt() function is used in the code to convert the first key in the map object to a number before returning it.
// The reason for doing this is that the keys in a JavaScript object (including a Map) are always strings. In the code you provided, the keys of the map object are numbers represented as strings (e.g., '1', '3', '5', etc.), because they were added using the map[A[i]] = true; statement.
// When you access the first key in the map object using Object.keys(map)[0], you get a string representing the first key in the map. In order to return this key as a number, you need to convert it using parseInt().
    return parseInt(Object.keys(map)[0]);
}

const B = [1,3,6,5,1,5,3,2,6];
console.log(solution(B));
