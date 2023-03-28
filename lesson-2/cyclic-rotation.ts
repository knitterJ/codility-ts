 // An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
//
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
//
// Write a function:
//
//     function solution(A: number[], K: number): number[];
//
// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
//
// For example, given
//     A = [3, 8, 9, 7, 6]
//     K = 3
//
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:
//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
//
// For another example, given
//     A = [0, 0, 0]
//     K = 1
//
// the function should return [0, 0, 0]
//
// Given
//     A = [1, 2, 3, 4]
//     K = 4
//
// the function should return [1, 2, 3, 4]


function solution(A: number[], K: number): number[] {
    const lenArr = A.length;
    // For example, if arr has length 5 and k is 8, then rotating the array by 8 times is equivalent to rotating the array by 3 times (i.e., 8 % 5 == 3).
    K = K % lenArr; // handle case where k > n

    if (lenArr === 1 || K === 0) {
  // If the array has length 1 or K is 0, there is no need to rotate the array
  return A;
}
    for (let i = 0; i < K; i++) {

    // Can't loop from 1st element to the last
    //
    // j  -> j+1
    // j      j ->  j+2
    // What value will have j+2 in the next iteration? The one from j as we deleted effectively j+1 this way.
    // Correct approach
    // first iteration:
    // j-1 -> j
    // second iteration:
    // j-2 -> j-1  j-1
    // j-1 still kept the correct value
    // Just be careful because this way first element of the array won't be updated
    // [?->j-k]

    // remember last letter with each iteration because it's the only one which will be overwritten and it'll be changing every time the program executes inner loop
    const lastBecomeFirst = A[lenArr-1];
    for(let j = lenArr-1; j > 0; j--){
      A[j]=A[j-1];
    }
    A[0] = lastBecomeFirst;
    }
    return A;
}

let B = [1,3,5,6];
console.log(solution(B, 3));
