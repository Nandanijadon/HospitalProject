const joi = require('joi');

const department = joi.object({

    department_id:
    joi.string().min(2).max(10).required(),
    department_name:
    joi.string().min(3).max(4).required(),
    department_est_date:
    joi.date().required(),
    room_id:
    joi.string().min(2).max(10).required()


})

const validatedeperatment = (req,res,next)=>{

    const{error,value} = department.validate(req.body);

    if(error){

        console.log(error);
        return res.send('invalid register')

    }

    else{

    }

    next();

}

module.exports={validatedeperatment};