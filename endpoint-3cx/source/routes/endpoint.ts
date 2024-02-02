import { Calls } from "../models/Call";
import { PhoneNumber } from "../models/phoneNumber";
import express, { Request, Response } from "express";
import { Contacts } from "../models/Contacts";

const router = express.Router();

let phone: PhoneNumber[] = [
    {
        id: 1,
        phone: "0857",
        name: "Ucok Isal Lubis",
        cardNo: "8000928349201923",
    },
    {
        id: 2,
        phone: "0858",
        name: "Dwi Arya Putra",
        cardNo: "800092384928421234",
    },
];
let calls: Calls[] = []
let contacts: Contacts[] = []

router.get("/phone", (req: Request, res: Response) => {
    const phoneNumber = req.query.number as string;
    const foundPhone = phone.find((entry) => entry.phone === phoneNumber);
    if (!foundPhone) {
        res.status(404).json({ message: "Phone Number not Found" });
    } else {
        res.json(foundPhone);
    }
});

router.post("/calls", (req: Request, res: Response) => {
    const requiredFields = ['customer_id', 'from_number', 'to_number', 'duration', 'call_type_text', 'call_start_time_local', 'call_end_time_local'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
    }
    const call: Calls = {
        id: calls.length + 1,
        customer_id: req.body.customer_id,
        from_number: req.body.from_number,
        to_number: req.body.to_number,
        duration: req.body.duration,
        call_type_text: req.body.call_type_text,
        call_start_time_local: req.body.call_start_time_local,
        call_end_time_local: req.body.call_end_time_local,
    };
    calls.push(call);
    res.status(200).json(call);
});

router.post("/contacts", (req: Request, res: Response) => {
    const requiredFields = ['name','phone'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
    }
    const contact: Contacts = {
        name: req.body.name,
        phone: req.body.phone,
    };
    contacts.push(contact)
    res.status(200).json(contact)
});
export default router;
