const { Storage } = require("@google-cloud/storage");
const storage = new Storage();
const cors = require('cors')();



exports.upload = async (req, res) => {
    cors (req,res, async () => {
        const body = req.body;
        if(body.extension === 'png' || body.extension === 'jpg'){
            const bucket = storage.bucket("hillery-wedding-image-storage");
            const buffer = Buffer.from(body.content, "base64");
            const file = bucket.file(`${body.name}.${body.extension}`);
            await file.save(buffer); // takes time so we must await
            await file.makePublic();
            res.send({ photoLink: file.publicUrl() });
        }
        else{
            res.status(415);
            res.send('Incorrect File Format')
        }
    })
};