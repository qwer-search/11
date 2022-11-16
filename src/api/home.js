import request from "@/utils/request";

/**
 * 获取品牌
 * @param {*} limit  -品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
    return request('/home/brand', 'get', { limit })
}
// 获取广告轮播图
export const findBanner = () => {
    return request('/home/banner', 'get')
}
// 获取新鲜好物
export const findNew = () => {
    return request('/home/new', 'get')
}

// 人气推荐
export const findHot = () => {
    return request('/home/hot', 'get')
}
//产品区块
export const findGoods = () => {
    return request('home/goods', 'get')
}
//最新专辑
export const findSpecial = () => {
    return request('home/special', 'get')
}