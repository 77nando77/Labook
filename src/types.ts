export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
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
    id: string,
    creator_id: string,
    content : string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}