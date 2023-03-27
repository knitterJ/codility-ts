// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
//
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
//
// Write a function:
//
//     function solution(N: number): number;
//
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//
// Write an efficient algorithm for the following assumptions:
//
//         N is an integer within the range [1..2,147,483,647].
//



function binarygap(N: number): number {

  // W JavaScript i TypeScript, liczby rozpoczynające się od zera są traktowane jako liczby zapisane w systemie ósemkowym, z wyjątkiem liczby zero, która jest zawsze zapisywana w systemie dziesiętnym.
  // Jeśli chcesz przypisać wartość binarną 0011 do zmiennej, możesz zrobić to za pomocą LITERAŁU BINARNEGO, który zaczyna się od prefiksu 0b, a nie 0o, jak w przypadku liczby ósemkowej.
  const num = 0b110000100000001;
  // console.log(num);

  // Argument metody toString() określa bazę, w której chcemy reprezentować daną liczbę. W tym przypadku argument wynosi 2, co oznacza, że chcemy otrzymać reprezentację binarną liczby num.
  let numStr = N.toString(2); // konwersja na binarny string

  // Plan działania
  // a) zdefiniuj zmienne potrzebne do rozwiązania zadania:
  // - maxZeroes przechowująca największą ilość zer pomiędzy jedynkami
  // - licznik, który będzie zliczał aktualną ilość zer
  // - flaga kontrolująca flow programu
  let maxZeroes = 0;
  let counter = 0;
  let flagOneEncountered = false;

  for(let i = 0; i < numStr.length; i++)
  {
    if(numStr[i]==="1"){

      flagOneEncountered = true;

      //for the second one in the row, check whether counter is greater than maxZeroes - if that's the case, update the score
      if(counter > maxZeroes){
        maxZeroes = counter;
        // console.log(maxZeroes);
        counter = 0;
      }

      // reset counter

      // start counting zeroes
    } else if (flagOneEncountered && numStr[i]==="0") {
      // console.log("wlazlo");
      counter += 1;
    }
    }

  return maxZeroes;
}

console.log(binarygap(21434));
