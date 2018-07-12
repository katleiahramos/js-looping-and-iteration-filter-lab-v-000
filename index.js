// Code your solution in this file
function findMatching(drivers, value) {
    const newDrivers = []
    for (const name of drivers){
      console.log(name.toLowerCase())
      if (name.toLowerCase() == value.toLowerCase){
        newDrivers.push(name)
      }

    }
    return newDrivers
}
