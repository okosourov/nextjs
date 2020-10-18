import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    
    // console.log(req.query);
    let doc = await req.db.collection('orders').findOne({"_id" : ObjectId(id)})
    // console.log(doc);
    res.json(doc);
});

handler.patch(async (req, res) => {
  const {
      query: { id, status, comment},
    } = req
  
  console.log(req.body);
  let doc = await req.db.collection('orders').update({"_id" : ObjectId(id)}, {
    $set: { status, comment }
  })
  // console.log(doc);
  res.json(doc);
});
export default handler;