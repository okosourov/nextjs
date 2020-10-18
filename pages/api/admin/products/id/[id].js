import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    

    let doc = await req.db.collection('products').findOne({"_id" : id})

    res.json(doc);
});
handler.patch(async (req, res) => {

  const {
      query: { id },
    } = req
    const { title, descript, structure, file, filemob, price, sku, parrent, sort} = req.body;
  


  let doc = null
  doc = await req.db.collection('products').update({"_id" : id}, {
    $set: {  
    "title": title,
    "descript": descript,
    "sostav": structure,
    "image": file,
    "imagemob": filemob,
    "price": price,
    "sku": sku,
    "parrent": parrent,
    "sort": sort,
    "updated_at": Date.now(), }
  })
  console.log(doc);
  res.json(doc);
});

export default handler;