// 扩展vue原有的功能，全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展


// import XtxSkeleton from "./xtx-skeleton.vue";
// import XtxCarousel from './xtx-carousel.vue';
// import XtxMore from './xtx-more.vue';
// import XtxBread from './xtx-bread.vue';
// import XtxBreadItem from './xtx-bread-item.vue'

const importFn = require.context('./', false, /\.vue$/)
export default {
    install(app) {
        // 在app上进行扩展，app提供conmponent directive函数
        // 如果要挂载原型app.config.globalPropreties 方式
        // app.component(XtxSkeleton.name, XtxSkeleton)
        // app.component(XtxCarousel.name, XtxCarousel)
        // app.component(XtxMore.name, XtxMore)
        // app.component(XtxBread.name, XtxBread)
        // app.component(XtxBreadItem.name, XtxBreadItem)

        // 根据keys批量注册
        importFn.keys().forEach(path => {
            // 导入组件
            const component = importFn(path).default
            // 进行组件
            app.component(component.name, component)
        })


        // 自定义指令
        defineDirective(app)

    }

}
//自定义指令
const defineDirective = (app) => {
    // 图片懒加载指令
    app.directive('lazyload', {
        mounted(el, binding) {
            const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    observer.unobserve(el)
                    el.onerror = () => {
                        el.src = defaultImg
                    }
                    el.src = binding.value
                }
            }, {
                threshold: 0.01
            })
            observer.observe(el)
        }
    })
}