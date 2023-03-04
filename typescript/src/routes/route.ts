import { Router } from "express"
import { S3Upload } from "../services/s3-aws"

export const router = Router()

router.get("/", (req, res) =>{
    return res.status(200).json({
        mensagem: "Rota raiz.",
    })
});


router.post("/upload", S3Upload.single("file"),(req, res) =>{
    return res.status(201).json({
        mensagem: "Upload realizado com sucesso.",
        url: req.file.location
    })
});



