// 定义分类相关的API接口函数
import request from '@/utils/request'


// 获取首页头部分类数据（顶级，二级，对应的商品推荐数据）

export const findAllCategory = () => {
    return request('/home/category/head', 'get')
}