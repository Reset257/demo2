import * as dayjs from 'dayjs'

// 格式化日期
export const timeFormat = (date?: any, format = 'YYYY-MM-DD') => {
	return dayjs(date).format(format)
}

// 获取今天的时间
export const getToday = (format = 'YYYY-MM-DD') => {
	return dayjs().format(format)
}

// 获取年份
export const getYear = (date?: any) => {
	return dayjs(date).year()
}

// 获取月份第一天
export const getStartOfMonth = (date?: any) => {
	return dayjs(date).startOf('month').format('YYYY-MM-DD')
}

// 获取月份最后一天
export const getEndOfMonth = (date?: any) => {
	return dayjs(date).endOf('month').format('YYYY-MM-DD')
}

// 计算当前时间与某个时间的差值
export const getDiffDate = (date?: any) => {
	return dayjs().diff(date, 'day')
}

// 判断是否超时
export const judgeTimeout = (date: any) => {
	return dayjs(date).isBefore(dayjs())
}