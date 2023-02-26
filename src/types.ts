export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface TokenPayload {
    id: string,
		name: string,
    role: USER_ROLE
}

export interface UserDB{
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLE,
    created_at: string
}

export interface PostDB {
    id:string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    creator?: {
        id:string,
        name:string
    }
}

export interface PostsDB{
    id:string,
    creator_id:string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}