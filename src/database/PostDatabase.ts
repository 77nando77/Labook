import { PostDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "posts"

    public async findPosts(q: string | undefined): Promise<PostDB[]> {
        let postDB

        if (q) {
            const result: PostDB[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .where("creator_id", "LIKE", `%${q}%`)
                .join("users", "users.id", "posts.creator_id")
                .select("posts.id","posts.content", "posts.likes", "posts.dislikes", "posts.created_at" , "posts.updated_at", "users.id as creator_id", "users.name")
            .then((x)=>{
                const response: PostDB[] = []

                x.map((post)=>{
                    response.push({
                        id: post.id,
                        content: post.content,
                        likes: post.likes,
                        dislikes: post.dislikes,
                        created_at: post.created_at,
                        updated_at: post.updated_at,
                        creator:{
                            id: post.creator_id,
                            name: post.name
                        }
                    })
                })

                return response
            })
            postDB = result

            postDB = result
        } else {
            const result: PostDB[] = await BaseDatabase.connection<PostDB>(PostDatabase.TABLE_POSTS)
            .join("users", "users.id", "posts.creator_id")
            .select("posts.id","posts.content", "posts.likes", "posts.dislikes", "posts.created_at" , "posts.updated_at", "users.id as creator_id", "users.name")
            .then((x)=>{
                const response: PostDB[] = []

                x.map((post)=>{
                    response.push({
                        id: post.id,
                        content: post.content,
                        likes: post.likes,
                        dislikes: post.dislikes,
                        created_at: post.created_at,
                        updated_at: post.updated_at,
                        creator:{
                            id: post.creator_id,
                            name: post.name
                        }
                    })
                })

                return response
            })
            postDB = result
        }

        return postDB
    }
    
    public async insertPost(newPostDB: PostDB) {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(newPostDB)
    }

}