const joi = require('joi');

const room = joi.object({

    room_id:
    joi.string().min(2).max(20).required(),
    room_name:
    joi.string().min(3).max(10).required()
})

const validateroom = (req,res,next)=>{
    const{error,value} = room.validate(req.body);
    if(error){
        console.log(error);
        return res.send('invalid register')
    }

    else {
        
    }
    next();
}


module.exports= {validateroom};