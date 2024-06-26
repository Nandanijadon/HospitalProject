const connection = require('../../Model/dbConnection');

const getemployee = async(req,res)=>{

    let query = 'SELECT * FROM employee';

    await connection.query(query, (err,result)=>{

        if(err){

            console.error('err', err.message);

        }

        else{
            res.send(result)
        }
    })
}

const postemployee = async (req,res)=>{
    const {employee_id, employee_name, department_id, employee_email, employee_contactno} = req.body;

    let query = 'INSERT INTO employee (employee_id, employee_name, department_id, employee_email, employee_contactno) values($1,$2,$3,$4,$5)';

    await connection.query(query, [employee_id, employee_name, department_id, employee_email, employee_contactno],(err,result)=>{

        if(err){

            console.error('error', err.message);
            
        }

        else {

            res.send(result);
        }
        

    })
}

const deleteemployee = async(req,res)=>{
    let employee_id = req.params.employee_id;

    let query = 'DELETE FROM employee WHERE employee_id= $1';

    await connection.query(query,[employee_id], (err,result)=>{

        if(err){
            res.send(err)
        }

        else{
            res.send(result)
        }
    })

}

const putemployee = async(req,res)=>{
    let employee_id = req.params.employee_id;
    let {employee_name, department_id, employee_email, employee_contactno} = req.body;

    let query = 'UPDATE employee SET employee_name = $1, department_id = $2, employee_email = $3, employee_contactno = $4 WHERE employee_id = $5' ;

    await connection.query(query,[employee_name, department_id, employee_email, employee_contactno,employee_id], (err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }

        else{
            res.send(result);
        }
    })
}

module.exports = {getemployee,postemployee,deleteemployee,putemployee};