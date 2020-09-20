import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s, p } = req.query;
    console.log(req.query);
    let doc = await req.db.collection('sliders').find().sort({ createdAt: -1 }).toArray()
    console.log(doc);
    res.json(doc);
});

export default handler;