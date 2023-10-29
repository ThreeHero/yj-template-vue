const requireComponents = require.context('./', true, /\.vue$/)

const install = Vue => {
  requireComponents.keys().forEach(fileName => {
    const config = requireComponents(fileName)
    Vue.component(config.default.name, config.default)
  })
}

export default install
