
function prepend() {
  // your code here
  let inputString: string = (<HTMLInputElement>document.getElementById("inputString")).value;
  let numSpaces:number = parseInt((<HTMLInputElement>document.getElementById("numSpaces")).value);

if(numSpaces!= null && inputString!= null){
let spaces: string ="";
  for(let x=0; x<numSpaces;x++){
  spaces = spaces + "&nbsp;";
  }
   let result = spaces + inputString;
   let output = "\"" + result + "\"";
   console.log(output);
   // Same as old Javascript
   let outputElement = document.getElementById("output");
   if (outputElement != null) {
       outputElement.innerHTML = output;
   }
}
else return "";

}

