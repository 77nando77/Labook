import { PostDatabase } from "../database/PostDatabase";
import { CreateInput, CreateOutput, GetPostInput } from "../dtos/postDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { Post } from "../models/Post";
import { IdGenerator } from "../services/IdGeneretor";
import { TokenManager } from "../services/TokenManager";

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager
    ) { }

    public getPosts = async (input: GetPostInput) => {
        const { q, token } = input

        if (typeof q !== "string" && q !== undefined) {
            throw new Error("'q' deve ser string ou undefined")
        }

        if (typeof token !== "string") {
            throw new BadRequestError("token esta vazio")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload === null) {
            throw new BadRequestError("Token não é valido")
        }

        return await this.postDatabase.findPosts(q)
    }

    public createPost = async (input: CreateInput): Promise <CreateOutput> => {
        const { content, token } = input

        if (typeof content !== "string") {
            throw new BadRequestError("Content tem que ser uma string");
        }

        if (!token) {
            throw new BadRequestError("Token não é valido");
        }



        const payload = this.tokenManager.getPayload(token)


        if (payload) {
            const id = this.idGenerator.generate()

            const newPost= new Post (
                id,
                payload.id,
                content,
                0,
                0,
                new Date().toISOString(),
                new Date().toISOString(),
            )

            const postDB = newPost.toDBModel()
            await this.postDatabase.insertPost(postDB)

        }
        const output: CreateOutput = {
            content
        }

        return output

    }

}