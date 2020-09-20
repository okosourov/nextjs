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
    let doc = await req.db.collection('users').findOne({"_id" : ObjectId(id)})
    console.log(doc);
    res.json(doc);
});
handler.patch(async (req, res) => {

  const {
      query: { id, bonus_bal, bonus_procent },
    } = req
  
  console.log(req.query);

  let doc = null
  doc = await req.db.collection('users').update({"_id" : ObjectId(id)}, {
    $set: { bonus_bal, bonus_procent }
  })
  //console.log(doc);
  res.json(doc);
});

export default handler;