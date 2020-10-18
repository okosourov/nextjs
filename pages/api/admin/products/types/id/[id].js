import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    

    let doc = await req.db.collection('products_type').findOne({"_id" : id})

    res.json(doc);
});
handler.patch(async (req, res) => {

  const {
      query: { id },
    } = req
    const { name, sku, sort, part} = req.body;
  


  let doc = null
  doc = await req.db.collection('products_type').update({"_id" : id}, {
    $set: {  
    "name": name,
    "sku": sku,
    "sort": sort,
    "part": part,
    "updated_at": Date.now(), }
  })
  console.log(doc);
  res.json(doc);
});

export default handler;