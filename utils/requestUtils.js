//定义请求根路径baseUrl
const baseUrl="http://localhost:8080"
/**
 * 返回请求根路径baseUrl
 */
export const getBaseUrl=()=>{
	return baseUrl;
}
/**
 * 后端请求工具类
 * @param {*}} params 
 */
export const requestUtil=(params)=>{
	// resolve——请求成功时调用的方法对象
	// reject——请求失败
	return new Promise((resolve,reject)=>{
		wx.request({
			...params,
			url:baseUrl+params.url,
			success:(result)=>{
				resolve(result.data)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	});
}