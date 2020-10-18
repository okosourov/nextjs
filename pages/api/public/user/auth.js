import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import { nanoid } from 'nanoid';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const {phone, codes, type, part} = req.body

    let userf = await req.db.collection('accounts').findOne({phone: phone});
    console.log(codes);
    console.log(userf.temp_pass.toString());
    let user = null;
    let status = 'false';
    if(type === 1) {
        let code = 1234;
        // change to random code
        if(!userf) {
            user = await req.db.collection('accounts').insertOne({
            _id: nanoid(12),
            part: part,
            name: null,
            phone: phone,
            email: null,
            email_virificate: false,
            date_birthday: null,
            month_birthday: null,
            temp_pass: code,
            bonus_bal: null,
            bonus_procent: null,
            status_bonus: null,
            adress: [],
            created_at: Date.now(),
            updated_at: Date.now(),
    
    
            });
            status = 'true';
        } else {
            let code = 1235;
            user = await req.db.collection('accounts').update({phone: phone}, {
                $set: {  
                    temp_pass: code,
                    updated_at: Date.now()
                }
              })
              status = 'true'; 
        }
        res.status(200).send('OK')
    } else if(type === 2) {
  
        
        if(userf.temp_pass.toString() ===  codes) {

            res.status(200).json(userf)
        }
        else {
            res.status(200).json({status: 'false'})
        }

    }
    
   
    

    
    
});

export default handler;