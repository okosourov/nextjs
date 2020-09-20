import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const { order, name, phone, user, usepromocode, select_adres, sdacha, nosdacha, get_bonus, pay_type, type, pay_method, total, status, comment, part} = req.query;
    console.log(req.query);
    let doc = await req.db.collection('orders').insertOne({"order": order,
    "name": name,
    "phone": phone,
    "user": user,
    "usepromocode": usepromocode,
    "select_adres": select_adres,
    "sdacha": sdacha,
    "nosdacha": nosdacha,
    "get_bonus": get_bonus,
    "pay_type": pay_type,
    "type": type,
    "pay_method": pay_method,
    "total": total,
    "status": status,
    "comment": comment,
    "part": part})
    console.log(doc);
    res.json(doc);
});

export default handler;