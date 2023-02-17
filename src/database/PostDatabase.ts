import { PostDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "posts"

    public async findPosts(q: string | undefined): Promise<PostDB[]> {
        let postDB

        if (q) {
            const result: PostDB[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS).where("name", "Like", `%${q}%`)

            postDB = result
        } else {
            const result: PostDB[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)

            postDB = result
        }

        return postDB
    }
}