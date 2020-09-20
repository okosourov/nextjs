import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const { email, password } = req.body;
    console.log(req.query);
    let doc = await req.db.collection('org_admins').insertOne({
    "email": email,
    "password": password,
    "org": null,
    'status': 1 ,
    "created_at": Date.now(),
    "updated_at": Date.now(),
    })
    console.log(doc);
    res.json({s: 'suc'});


  
});

export default handler;