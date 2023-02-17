import { USER_ROLE } from "../types";

export class Post {
    constructor(
        private id: string,
        private creator_id: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private created_at: string,
        private updated_at: string
    ) { }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
        this.id = id
    }

    public getCreatorId(): string {
        return this.creator_id
    }

    public setCreatorId(creatorId: string): void {
        this.creator_id = creatorId
    }

    public getContent():string{
        return this.content
    }

    public setContent(content:string):void{
        this.content = content
    }

    public getLikes():number{
        return this.likes
    }

    public setLikes(likes:number):void{
        this.likes = likes
    }

    public getDislikes():number{
        return this.dislikes
    }

    public setDislikes(dislikes:number):void{
        this.dislikes = dislikes
    }

    public getCreatedAt():string{
        return this.created_at
    }

    public setCreatedAt(createdAT:string):void{
        this.created_at = createdAT
    }

    public getUpdatedAt():string{
        return this.updated_at
    }

    public setUpdatedAt(updatedAt: string):void{
        this.updated_at = updatedAt
    }
}