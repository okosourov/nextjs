import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    
    console.log(req.query);
    let doc = await req.db.collection('orders').findOne({"_id" : ObjectId(id)})
    console.log(doc);
    res.json(doc);
});

export default handler;