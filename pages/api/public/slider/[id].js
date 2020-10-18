import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    
    

  
    let sliders = await req.db.collection('sliders').find({part: id}).sort({ createdAt: -1 }).toArray()

    res.json(sliders);
});

export default handler;