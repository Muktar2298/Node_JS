//--OS (Operating System Module) --//
const os = require('os');

// --1.type() 
console.log(os.type());
//2.freemem() 
console.log(os.freemem());
//--3.arch() 
console.log(os.arch());

//4.cpus()
console.log(os.cpus());

//5.userInfo()
console.log(os.userInfo());
//6.homedir()
console.log(os.homedir());
//--7.totalmem()
console.log(os.totalmem());
//--8.release()
console.log(os.release());