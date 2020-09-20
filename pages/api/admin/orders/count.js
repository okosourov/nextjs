import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { p } = req.query;
    // console.log(req.query);
    let doc = await req.db.collection('orders').find({part: p}).count()

    res.json(doc);
});

export default handler;