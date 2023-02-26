import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { CreateInput } from "../dtos/postDTO"


export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }
    public getPosts = async (req: Request, res: Response) => {
        try {
            const input = {
                q: req.query.q,
                token: req.headers.authorization
            }
            const output = await this.postBusiness.getPosts(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    public createPost = async (req:Request, res: Response) =>{
        try {
            
            const input: CreateInput = {
                content: req.body.content,
                token: req.headers.authorization
            }

            const output = await this.postBusiness.createPost(input)

            res.status(200).send(output)
            
        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }     
}