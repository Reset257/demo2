// 定义接口返回类型
interface Result {
	code: number
	message: string
	flag: boolean
}

export interface IResultType<T = any> extends Result {
	data?: T
}


