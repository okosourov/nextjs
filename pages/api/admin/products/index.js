import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s, p } = req.query;
   
    const query = { "part": p };
    let doc = await req.db.collection('products').find(query).skip( parseInt(s) ).sort({ createdAt: -1 }).toArray()

    res.json(doc);
});

export default handler;