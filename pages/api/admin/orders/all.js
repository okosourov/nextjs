import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { s, p } = req.query;

    // let doc = await req.db.collection('orders').find({part: p}).toArray()
    const query = { "part": p };
    let doc = []
    req.db.collection('orders').find(query).skip( parseInt(s) ).limit( 50 )
    .toArray()
    .then(items => {

        res.json(items)     
    })
    .catch(err => {console.error(`Failed to find documents: ${err}`)
    res.statusCode(500)
    })
    // console.log(doc);
    // console.log(p);


});

export default handler;