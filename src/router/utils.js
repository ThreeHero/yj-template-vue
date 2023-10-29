import { App } from 'yj-design-tools'

const replaceIndex = path => path.replaceAll('./', '').replace(/(\/index)?\.vue/g, '')
const whiteRoute = ['api', 'components', 'map']

const getRoutes = () => {
  const pagesContext = require.context('../pages', true, /\.vue$/)
  const pageModules = pagesContext
    .keys()
    .map(modulePath => {
      const pathWithoutExtension = replaceIndex(modulePath)

      if (whiteRoute.includes(pathWithoutExtension.split('/').at(1))) {
        return null
      }

      return pathWithoutExtension
    })
    .filter(Boolean)

  return pageModules
}

const routes = getRoutes()

export const addRoutes = router => {
  routes.forEach(file => {
    const path = '/' + file.replaceAll('/[', '[').replaceAll('[', '/:').replaceAll(']', '')
    router.addRoute('main', {
      path,
      component: () => import('../pages/' + file)
    })
  })
}

export const routeGuard = router => {
  router.beforeEach((to, from) => {
    const token = App.getToken()
    if (token) {
      if (to.path === '/login') {
        return '/'
      }
    } else {
      if (to.path !== '/login') {
        return '/login'
      }
    }
  })
}
