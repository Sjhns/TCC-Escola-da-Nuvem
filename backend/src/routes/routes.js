const router = require("express").Router();

const S3Upload = require("../services/s3-aws");

router.post("/upload", S3Upload.single("file"),(req, res) =>{
    return res.status(201).json({
        mensagem: "Upload realizado com sucesso.",
        url: req.file.location
    })
});

router.get("/", (req, res) =>{
    return res.status(200).json({
        mensagem: "Rota raiz.",
    })
});

module.exports = router;

