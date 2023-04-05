// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
//
// Your goal is to find that missing element.
//
// Write a function:
//
//     function solution(A: number[]): number;
//
// that, given an array A, returns the value of the missing element.
//
// For example, given array A such that:
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
//
// the function should return 4, as it is the missing element.
//
// Write an efficient algorithm for the following assumptions:
//
//         N is an integer within the range [0..100,000];
//         the elements of A are all distinct;
//         each element of array A is an integer within the range [1..(N + 1)].

function solution(A: number[]): number {


  // fill up new array with the same length with zeros
      const count: number[] = new Array(A.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    count[A[i] - 1]++;
    //check out how beautifully smart and simple at the same time this for loop is.
    console.log(count);
    //it basically fills up 0 array with 1 each time the number (that is treated as index in count array) is encountered - thus we can calculate how many times the particular number appeared
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) {
      //simply return index of the missing number
      return i + 1;
    }
  }

  return undefined;

// or you can do it by sorting the numbers and then check where's the difference greater than one between two numbers. Both solutions have the same time complexity of O(N log N) in the worst-case scenario due to the sorting operation in solution 2. However, the first solution may have better performance in practice because it only requires a single pass over the array and has a lower constant factor in its time complexity. In contrast, solution 2 requires two passes, one for sorting and another for finding the missing number, and has a higher constant factor due to the sorting operation. Therefore, the first solution may be a better choice if performance is a concern.

//      A.sort((a, b) => a - b);

//   for (let i = 1; i < A.length; i++) {
//     if (A[i] - A[i-1] > 1) {
//       return A[i-1] + 1;
//     }
//   }

//   return A.length + 1;
}

console.log(solution([1,2,3,4,5,7]));


// or... the most optimal would be finding mathematical forumula that includes the sum of the N numbers and the sum of our numbers. It has always O(N) complexity. 
// inne najbardziej optymalne podejście - to znaczy znalezienie matematycznego wzoru

// 1..6
//
// mamy 3 pary (6/2 = długość podzielona przez 2 = 3)
//
// suma każdej z par? Czy ona jest za każdym razem równa?
//
// 1+6 = 7
// 2+5 = 7
// 3+4 = 7
//
// Wow! tak!
//
// 7*3 = 21
//
// -------------
// Czy to działa także w przypadku nieparzystego ciągu?
//
// 1..7
//
// 3,5 pary ?
//
// 1+7=8
// 2+6=8
// 3+5=8
// 4+4=8
//
// 8*3,5=28 te pół pary uwzględnione w równaniu załatwia sprawę!
//
//
// A jeśli skorzystamy z tego samego wzoru, z tym że dla listy z brakującym elementem?
// nie nie, nie chodzi o skorzystanie z tego samego wzoru dla przypadku z brakującym elementem.
//
// Dla takiego przypadku musimy zsumować "ręcznie" wszystkie elementy, jako że jest to przypadek niedoskonały tego co robiliśmy powyżej
//
// 1,2,3,4,6  = 1+2+3+4+6 = 16
//
//
// Różnica da nam właściwy wynik, jako że w drugiej z sum brakuje dokładnie jednej liczby.
//
// Zauważ także, że nawet jeśli elementy są nie poukładane, to i tak A1=[1] A2=[3] A3=[2] A.length zwróci poprawną wielkość liczby maksymalnej (lub jednoznacznej z nią długości ciągu)
//
// So basically we substract two sums, right?
//
// Yes, that's correct. We are subtracting the sum of the elements in the given array A from the sum of all the elements in the range 1 to n. This gives us the missing number in the range 1 to n.
