import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { user } = req.query;
    console.log(req.query);
    let doc = await req.db.collection('users').find().count()
    console.log(doc);
    res.json(doc);
});

export default handler;