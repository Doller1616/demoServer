const fs = require("fs");

exports.formDetails = (req,res,next) =>{
   // Asynchronous read
fs.readFile("./assets/data.txt", function (err, data) {
    if (err) {
      return next(new Error(err));
    }
    let fileTxt = data.toString()
    let jsonData = JSON.parse(fileTxt)
    res.status(200).json({
        msg: "add form",
        data: jsonData
     })
    console.log("Asynchronous read: " + data.toString());
 });
    
}

exports.updateForm = (req,res,next) =>{
    fs.writeFile('./assets/data.txt', req.body , function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });
}