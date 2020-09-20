import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s, p } = req.query;
    let doc = await req.db.collection('orders').find({part: p}).skip( parseInt(s) ).limit( 50 ).sort({ createdAt: -1 }).toArray()
    res.json(doc);
});

export default handler;