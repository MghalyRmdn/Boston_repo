let revString = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

// revString("nothing");

(function(str) {
 let reversed = "";
 for (let character of str){
     reversed = character + reversed;
 }
 console.log({
     reversed_value: reversed,
 })
})("ngocok")