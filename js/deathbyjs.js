//STEP 1
/*
let txt = prompt("Enter some letters");

function alphabetOrder(x) {
    return x.split('').sort().join('');
    
}
console.log(`You entered: ${txt}`);
console.log(`In alphabetical order: ${alphabetOrder(txt)}`);
*/

//STEP 2
/*
let sentence = 'the quick brown fox';

function capitalLetters(){
    let words = sentence.split(" ");
    console.log(sentence);
    
    for (let i = 0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    console.log(words.join(" "));
}

capitalLetters(sentence);
*/

//STEP 3
/*
let txt = 'The quick brown fox';

function vowels(x){
    let vowelCount = 0;
    for (i = 0; i < x.length; i++){
        if(x.charAt(i) == 'a'|| x.charAt(i) == 'e' || x.charAt(i) == 'i' || x.charAt(i) == 'o' || x.charAt(i) == 'u'){
            vowelCount += 1;
        }
    }
    return vowelCount;
}

console.log(vowels(txt));
*/

//STEP 4
/*

let id = '';
let validChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomId(idLength){

    for(let i = 0; i < idLength; i++){
        id += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }

    console.log(`Your random ID is: ${id}`);
}
randomId(8);
*/

//STEP 5
/*
function longestCountryName(countryList){
    let longestName = '';
    
    for(let i = 0; i < countryList.length; i++){
        let country = countryList[i];
        //console.log(country);
        console.log(`${country}, name length: ${country.length}`)

        if(country.length > longestName.length){
            longestName = country;
        }      
    }
    console.log(`The longest country name is: ${longestName}`);
}

longestCountryName(["Australia", "Germany", "United States of America"]);
*/