import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';
import Moment from 'react-moment';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { p } = req.query;
    console.log(req.query)
    let newDate = new Date()
    let date = newDate.getDate() + 1;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const d = new Date(year,month,date)
    const dat = Date.parse(d)
    

    
    // let doc = await req.db.collection('orders').find({part: p}).toArray()
    const query = { "part": p, "created_at": { $gte: dat } };
    let doc = []
    req.db.collection('orders').find(query)
    .toArray()
    .then(items => {
        console.log(items)
        res.json(items)     
    })
    .catch(err => {console.error(`Failed to find documents: ${err}`)
    res.statusCode(500)
    })
    // console.log(doc);
    // console.log(p);


});

export default handler;