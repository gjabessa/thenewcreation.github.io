module.exports.multiply = function(req,res){
    let number1 = 0;
    let number2 = 0;
    if(req.params && req.params.number1 && !isNaN(req.params.number1) && req.query && req.query.number2 && !isNaN(req.query.number2)){
         number1 = req.params.number1;
         number2 = req.query.number2;
       
    }
    
    res.status(200).json({"answer: ": number1*number2})
}