import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    
    console.log(req.query);
    let doc = await req.db.collection('accounts').findOne({"_id" : id})
    const query = { "user": id };
    req.db.collection('orders').find(query)
    .toArray()
    .then(items => {

        res.json({user: doc, orders: items})     
    })
    .catch(err => console.error(`Failed to find documents: ${err}`))


});
handler.patch(async (req, res) => {

  const {
      query: { id, bonus_bal, bonus_procent },
    } = req
  
  console.log(req.query);

  let doc = null
  doc = await req.db.collection('accounts').update({"_id" : id}, {
    $set: { bonus_bal, bonus_procent }
  })
  //console.log(doc);
  res.json(doc);
});

export default handler;