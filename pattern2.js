// function mazeOne(s){
//     for (let i = 0; i < s; i++) {
//       let result = ''
//       for (let j = 0; j < s; j++){
//         if(j === 0 || j === s-1) {
//           result += "@"
//         } else if (i % 4 === 0 && j !== 1){
//             result += "@"
//           } else if (i % 4 !== 0 && i % 2 === 0 && j !== s-2){
//             result += "@" 
//           } else {
//             result += " "
//           } 
//       }
//       console.log(result)
//     }
// }

function inventoryList(){
  let arr = [];

  function add(name){
    if(arr.indexOf(name) === -1){
      arr.push(name);
    }
  }
    function remove(name){
      let i = arr.indexOf(name);
      if(i !== -1){
        arr.splice(i , 1 );
      }
    }

    function getList(){
      return arr;
    }
    return {add , remove , getList }; 
  }
