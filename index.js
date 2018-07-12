// Code your solution in this file
function findMatching(drivers, value) {
    const newDrivers = []
    for (const name of drivers){
      if (name == value){
        newDrivers.push(name)
      }

    }
    return newDrivers
}
