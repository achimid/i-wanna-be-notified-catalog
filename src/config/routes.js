const healthcheck = require('./healthcheck')
const catalog = require('../catalog/catalog-controller')

const prefix = process.env.API_PREFIX + process.env.API_VERSION

module.exports = async (app) => {
    console.info('Registrando rotas...')

    app.use(`${prefix}`, catalog)   
    app.use(`${prefix}`, healthcheck)

    return app
}