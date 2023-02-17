import { PostDatabase } from "../database/PostDatabase";
import { Post } from "../models/post";

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase
    ) {}

    public getPosts = async (input: any) => {
        const { q } = input

        const postsDB = await this.postDatabase.findPosts(q)

        const posts: Post[] = postsDB.map((postDB) =>
            new Post(
                postDB.id,
                postDB.creator_id,
                postDB.content,
                postDB.likes,
                postDB.dislikes,
                postDB.created_at,
                postDB.updated_at
            )
        )

        return posts
    }
}