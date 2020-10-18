import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const { order, name, phone, user, usepromocode, select_adres, sdacha, nosdacha, get_bonus, pay1, type, pay2, total, status, comment, part, newadr} = req.body;
    console.log(req.body);
    let adr = select_adres;
    if(select_adres === 'new') {
        adr = await req.db.collection('accounts_address').insertOne({
            "user": user,
            "name": newadr.Aname,
            "street": newadr.street,
            "flat": newadr.flat,
            "flour": newadr.flour,
            "inc": newadr.inc,
            "ent": newadr.ent,
            "comment": comment,
            "created_at": Date.now(),
            "updated_at": Date.now(),
        })
    }
    let doc = await req.db.collection('orders').insertOne({
        "order": order,
        "name": name,
        "phone": phone,
        "user": user,
        "usepromocode": usepromocode,
        "select_adres": adr,
        "sdacha": sdacha,
        "nosdacha": nosdacha,
        "get_bonus": get_bonus,
        "pay_type": pay1,
        "type": type,
        "pay_method": pay2,
        "total": total,
        "status": status,
        "comment": comment,
        "part": part,
        "created_at": Date.now(),
        "updated_at": Date.now(),
    })
    
    console.log(doc);
    res.json(doc);
});

export default handler;