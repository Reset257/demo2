
import Cookies from 'js-cookie'

const cookieExpires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 30)

const TOKEN_KEY = 'Authorization'

export const setToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}

export const delToken = () => {
    Cookies.remove(TOKEN_KEY)
}
