import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { id },
      } = req
    
    console.log(req.query);
    let doc = await req.db.collection('accounts_address').findOne({"_id" : id})
    

    res.json(doc);
});

export default handler;