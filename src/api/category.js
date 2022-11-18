// 定义分类相关的API接口函数
import request from '@/utils/request'


// 获取首页头部分类数据（顶级，二级，对应的商品推荐数据）

export const findAllCategory = () => {
    return request('/home/category/head', 'get')
}


/**
 * 获取顶级类目信息（children属性就是各个子类目）
 * @param {String} id --顶级类目ID
 * @returns
 */
export const findTopCategory = (id) => {

    return request('/category', 'get', { id })

}