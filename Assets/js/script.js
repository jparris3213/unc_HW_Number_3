// Assignment Code
var generateBtn = document.querySelector("#generate");
var firstquestion = document.querySelector("#promptone");
var passlength = document.querySelector("#passlength");
var nextquestbtn = document.querySelector("#next")
var secondquestion = document.querySelector("#prompttwo")
var finishupbtn = document.querySelector("#finish");

var passwordbucket = [];

document.querySelector("#password").value = "Click Generate Password to Begin Process";

function generatePassword() {
  firstquestion.setAttribute("style","display:flex");
  

};

nextquestbtn.addEventListener("click", function(){
   var possiblelength = parseInt(passlength.value);

   var passwordText = document.querySelector("#password")

   if (possiblelength < 8){
     passwordText.value = "Too Low";
   } else if(possiblelength > 128){
    passwordText.value = "Too High";
   } else {
     localStorage.setItem("length",possiblelength);
    secondquestion.setAttribute("style","display:flex"); 
    passwordText.value = "Your Password will be " + possiblelength + " Characters Long";
   }
});








  //Second Prompt: character type checkbox? lowercase, uppercase, numeric, and/or special characters
finishupbtn.addEventListener("click", function(){
  var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  var numbers= "0123456789";
  var symbolchoices = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  if (document.getElementById("upper").checked) {
    a = uppercaseletters.split("")
    passwordbucket.push(a);
  } else {};
  if (document.getElementById("lower").checked) {
    b = lowercaseletters.split("");
    passwordbucket.push(b);
  } else {};
  if (document.getElementById("numnum").checked) {
    passwordbucket.push(numbers);

  } else {};
  if (document.getElementById("special").checked) {
    passwordbucket.push(symbolchoices);
  } else {};

  console.log(passwordbucket);


})

  //generate actual password from passwordBucket array and return value

















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function init(){
  var passwordText = document.querySelector("#password");
  passwordText.value= "Follow the steps to create a password";

}