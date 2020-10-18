import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s, p } = req.query;
    console.log(req.query);
    const query = { "part": p };
    let doc = await req.db.collection('products_type').find(query).skip( parseInt(s) ).sort({ createdAt: -1 }).toArray()
    console.log(doc);
    res.json(doc);
});

export default handler;