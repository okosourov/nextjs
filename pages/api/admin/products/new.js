import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import { nanoid } from 'nanoid';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const { title, descript, structure, file, filemob, price, sku, parrent, sort, part} = req.body;

    
    let prod = await req.db.collection('products').insertOne({
        _id: nanoid(12),
        title: title,
        part: part,
        descript: descript,
        sostav: structure,
        image: file,
        imagemob: filemob,
        price: price,
        sku: sku,
        parrent: parrent,
        sort: sort,
        created_at: Date.now(),
        updated_at: Date.now(),
        
    })


    res.status(201).json({status: 'created'});
});

export default handler;