export type ILoginRole = "admin" | "tenant" | "auth";

export interface IAccountLogin {
    username?: string
    password?: string
    code?: string
}
