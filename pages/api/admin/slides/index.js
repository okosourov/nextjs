import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s, p } = req.query;
    const query = { "part": p };
    let doc = await req.db.collection('sliders').find(query).sort({ createdAt: -1 }).toArray()
    console.log(doc);
    res.json(doc);
});

export default handler;