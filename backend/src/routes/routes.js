const router = require("express").Router();

const S3Upload = require("../services/s3-aws");

router.post("/upload", S3Upload.single("file"),(req, res) =>{
    return res.status(201).json({
        mensagem: "Upload realizado com sucesso.",
        url: req.file.location
    })
});

module.exports = router;

