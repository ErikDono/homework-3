




// Assignment Code
var generateBtn = document.querySelector("#generate");

var

var randomItem = {
  numbers =["0,1,2,3,4,5,6,7,8,9"];
  upLetters =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  lowLetters =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
  symbols =[" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
}

var newPass = ("")


// Write password to the #password input
function writePassword() {

  alert("Lets make a password!")
  var passLength = prompt("How many characters ? (8-128)")
  //im thinking passlength= passlenght.value, but i need to turn it from a string to an object... i think? so that i can use it to feed the info to my new password. 
  if (passLength < 8 || ppassLength > 128) {
    alert("Between 8 and 128 please")
    // return? or another prompt?
  }
  else (newpass.lenght = parseint(passLength))
  //passLength s going to feed the newpass through affecting the iterator when i am pulling throught the values and adding randomness to the chocies! 


  var upperChoice = confirm("Would you like to use Upper Case Letters?")

  //if this is confirmed, i want to merge! upper case in my password

  var lowerChoice = confirm("would you like to use ")
  // if this is confirmed, i want to merge! lower case in my new password

  var numChoice = confirm("Would you like to use numbers?")

  //if this is confirmed, i want to merge! numbers to be used in my new password

  var specChoice = confirm("Would you like to use special characters?")

  // if this is confirmed, i want to merge! special characters to be used for my new password

  // im going to need the following merge statments for each possible answer: 
  // all yes, 3 yes, 2 yes, 1 yes. 
  // if no yes, then what?

}

var userChoice
// if all true, set user choice to  numbers,symnbols, upLetters, lowLetters  
// if none true alert(you have to choose at least one!)
if (specChoice && numChoice && lowerChoice) {
  userChoice = concat(symbols, numbers, lowLetters)
}
if (specChoice && numChoice && lowerChoice)
// if(specChoice === true) { }
// if (numChoice === true) { }
// if (lowerChoice === true)
//   if (upperChoice === true)


}

function generatePassword() {
  // this relates to generate passoword below, so the output of this function will be var password. Maybe this is where my random-ator goes? 
  // for (let i = 0; index < passLength.length; index++) {
  // const newPass = ^all choices put together^[math.floor(math.random()*^length of userChoice array^];

}
}

var password = generatePassword()
var passwordText = document.querySelector("#password");
passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


