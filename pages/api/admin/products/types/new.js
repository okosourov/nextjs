import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import { nanoid } from 'nanoid';
import middleware from '../../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const { title, sku, sort, part} = req.body;

    
    let prod = await req.db.collection('products_type').insertOne({
        "_id": nanoid(12),
        "name": title,
        "sku": sku,
        "sort": sort,
        "part": part,
        "created_at": Date.now(),
        "updated_at": Date.now(),
    })


    res.status(201).json({status: 'created'});
});

export default handler;