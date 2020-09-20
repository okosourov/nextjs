import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const { alt, img, img2x, img3x, imgmob, link, part} = req.body;

    
    let prod = await req.db.collection('sliders').insertOne({
        "part": part,
        "alt": alt,
        "image": img,
        "image2x": img2x,
        "image3x": img3x,
        "imagemob": imgmob,
        "link": link,
        "created_at": Date.now(),
        "updated_at": Date.now(),

    })


    res.status(201).json({status: 'created'});
});

export default handler;