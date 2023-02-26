export interface GetPostInput {
    q: unknown,
    token: string | undefined
}

export interface CreateInput{
    content: unknown
    token?: string
}

export interface CreateOutput{
    content: string
}