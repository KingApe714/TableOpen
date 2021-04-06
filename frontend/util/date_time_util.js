const time = new Date()
const pastTime = new Date(2020, 11, 17, 3, 24, 0)
console.log(pastTime.getTime());
console.log(time.getTime())
console.log(time - pastTime)
console.log(pastTime - time)