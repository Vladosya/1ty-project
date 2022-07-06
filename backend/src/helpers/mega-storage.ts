import {Storage} from "megajs";

let count: number = 1;

const modifyStorage = async (message: string, dateCreate: string) => {
    const storage = await new Storage({
        email: `${process.env.MEGA_EMAIL}`,
        password: `${process.env.MEGA_PASSWORD}`,
    }).ready;
    await storage.upload(`note${count++}.txt`, `Date create: ${dateCreate}\nMessage: ${message}`).complete;
};

export default modifyStorage;
