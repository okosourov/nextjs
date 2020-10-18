import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    
    

    let products = await req.db.collection('products').find({part: id}).sort({ createdAt: -1 }).toArray()
    let types = await req.db.collection('products_type').find({part: id}).sort({ createdAt: -1 }).toArray()

    res.json({products,types});
});

export default handler;