//定义state插件扩展Vue
// export default{
//     install(Vue,state)
//     {
//         Object.defineProperties(Vue.prototype,'$state',{
//             get: () => state,
//         })
//         // Vue.propotype.$state=$state
//     }
// }
export default {
    install (Vue, state) {
      Object.defineProperty(Vue.prototype, '$state', {
        get: () => state,
      })
    }
  }