// Code your solution in this file
function findMatching(names, value) {
    for (const name in names){
      if (name == value){
        console.log(name)
      }
    }
}
