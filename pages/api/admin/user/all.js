import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s,p } = req.query;
    console.log(req.query);
    const query = { "part": p };
    let doc = await req.db.collection('accounts').find(query).skip( parseInt(s) ).limit( 50 ).sort({ createdAt: -1 }).toArray()
    console.log(doc);
    res.json(doc);
});
handler.post(async (req, res) => {
    const { s } = req.query;
    console.log(req.query);
    
    res.json({s: s});
});

export default handler;