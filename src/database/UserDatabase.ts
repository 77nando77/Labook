import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"
    public async getUsers(q: string | undefined) {
        let usersDB

        if (q) {
            const result: UserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)

            usersDB = result
        } else {
            const result: UserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)

            usersDB = result
        }

        return usersDB
    }
    public async getUserById(id: string) {
        const [userDB]: UserDB[] | undefined[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({ id })

        return userDB
    }
    public async getUserEmail(email: string) {
        const [userDB]: UserDB[] | undefined[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({ email })

        return userDB
    }
    public async insertUser(newUserDB: UserDB) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(newUserDB)
    }
}