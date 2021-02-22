     /* 	function findMax(arrayOfNumbers)
    Gasiti cel mai mare nr dintr-un masiv M de numere */

     // 1 // 
     const arrayOfNumbers = [];

     function findMax(arrayOfNumbers) {
         return Math.max(...arrayOfNumbers);
     }

     findMax(arrayOfNumbers);

     // 2 // 
     const arrayOfNumbers = [];

     function findMax(arrayOfNumbers) {
         return Math.max.apply(null, arrayOfNumbers);
     }

     findMax(arrayOfNumbers);

     /* function findMin(arrayOfNumbers)
     Gasiti cel mai mic nr dintr-un masiv M de numere */

     // 1 //

     const arrayOfNumbers = [];

     function findMin(arrayOfNumbers) {
         return Math.min(...arrayOfNumbers);
     }

     findMin(arrayOfNumbers);

     // 2 // 
     const arrayOfNumbers = [];

     function findMin(arrayOfNumbers) {
         return Math.min.apply(null, arrayOfNumbers);
     }

     findMin(arrayOfNumbers);

     /* function displayDate(day, month, year); // 1, 1, 2021 => 01.01.21, 
    10, 10, 2021 => 10.10.21
	Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre. */

     // 1 //

     function displayDate(day, month, year) {
         const date = new Date(year, month - 1, day);
         const options = {
             day: '2-digit',
             month: '2-digit',
             year: '2-digit'
         };
         const dateFormat = Intl.DateTimeFormat('ru', options);
         return dateFormat.format(date);
     }

     displayDate(date);

     // 2 //
    function displayDate(day, month, year) {
        const date = new Date(year, month - 1, day);
        const ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        return(`${da}.${mo}.${ye}`);
    }

    displayDate(day, month, year);

     /* function isPalindrom(string);
     Verificați dacă un cuvint/fraza este palindrom 
     (se citește invers la fel ca în original). */

     function isPalindrom(string) {
         const reversed = string.split("").reverse().join("");

         return reversed === string;
     }
     isPalindrom(string);

     /* function isInteger(x)
     Verificați dacă parametrul transmis către funcție este un număr întreg. */

     function isInteger(x) {
         return Number.isInteger(x);
     }
     isInteger(x);

     /* function isFloat(x)
     Verificați dacă parametrul transmis 
     către funcție este un număr real (cu numere după virgula). */

     function isFloat(x) {
         return x % 1 !== 0;
     }
     isFloat(x);

     /*  function convertToRomanNumber(x);
     Transformati un număr X întreg în echivalentul scris cu numerale romane */

     function convertToRomanNumber(x) {
         const romanNum = {
             M: 1000,
             CM: 900,
             D: 500,
             CD: 400,
             C: 100,
             XC: 90,
             L: 50,
             XL: 40,
             X: 10,
             IX: 9,
             V: 5,
             IV: 4,
             I: 1
         };
         let roman = "";
         for (let key in romanNum) {
             while (x >= romanNum[key]) {
                 roman += key;
                 x -= romanNum[key];
             }
         }
         return roman;
     }

     convertToRomanNumber(x);
