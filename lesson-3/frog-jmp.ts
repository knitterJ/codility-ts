// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
//
// Count the minimal number of jumps that the small frog must perform to reach its target.

// Write a function:
//
//     function solution(X: number, Y: number, D: number): number;
//
// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
//
// For example, given:
//   X = 10
//   Y = 85
//   D = 30

// the function should return 3, because the frog will be positioned as follows:
//
//         after the first jump, at position 10 + 30 = 40
//         after the second jump, at position 10 + 30 + 30 = 70
//         after the third jump, at position 10 + 30 + 30 + 30 = 100



function frogJmp(X: number, Y: number, D: number): number {
    //For example, if the frog is currently at position X = 10 and needs to reach position Y = 85 with a fixed jump distance D = 30, then the total distance the frog needs to cover is 85 - 10 = 75.
// Dividing this distance by the fixed jump distance gives the number of jumps needed to cover the distance, which is (85 - 10) / 30 = 2.5. Since the frog cannot take half a jump, we round up the result to the nearest integer using the ceil function, which gives us the minimal number of jumps needed to reach or surpass the distance Y, which is 3.

    return Math.ceil((Y-X)/D);

    // or less optimal (O(N) instead of O(1))
    // let counter = 0;
    // let currentDist = X;
    // while (currentDist < Y){
    //     counter++;
    //     currentDist+=D;
    // } return counter;
}

console.log(frogJmp(10,8500,30));
