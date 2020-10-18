import nextConnect from 'next-connect';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { p } = req.query;

    // let doc = await req.db.collection('orders').find({part: p}).toArray()
    const query = { "part": p };
    let doc = []
    req.db.collection('orders').find(query)
    .toArray()
    .then(items => {

        res.json(items.length)     
    })
    .catch(err => console.error(`Failed to find documents: ${err}`))
    // console.log(doc);
    // console.log(p);


});

export default handler;