// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

function getCount(state){
	return state.count
}

function loginStatus(state){
	return state.login
}

export default {getCount, loginStatus}