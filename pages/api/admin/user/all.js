import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s } = req.query;
    console.log(req.query);
    let doc = await req.db.collection('users').find().skip( parseInt(s) ).limit( 50 ).sort({ createdAt: -1 }).toArray()
    console.log(doc);
    res.json(doc);
});
handler.post(async (req, res) => {
    const { s } = req.query;
    console.log(req.query);
    
    res.json({s: s});
});

export default handler;