const CatalogModel = require('./catalog-model')
const { isJSON } = require('../utils/commons')

const create = (catalog) => CatalogModel.create(catalog)

const createMultiple = (catalogList = []) => catalogList.map(create)

const createFromIntegration = (body) => {
    const data = getDataFromIntegrationBody(body)
    return create(data)
}

const getDataFromIntegrationBody = (body) => {

    const { extractedTarget, extractedContent } = body
    
    let hasIntegrationData = ((!!extractedContent && extractedContent.length > 0) || !!extractedTarget) 
    let data

    if (hasIntegrationData) {
        if (extractedTarget) {
            if(isJSON(extractedTarget)) {
                data = JSON.parse(extractedTarget)
            } else {
                data = extractedTarget
            }
        } else if (extractedContent) {
            data = extractedContent[0]
            for (const extItem of extractedContent) {
                if (isJSON(extItem)) {
                    data = JSON.parse(extItem)
                    break
                } else if (typeof extItem === "object") {
                    data = extItem
                    break
                }
            }
        }
    }

    if (!data) throw 'Não foi possivel extair os dados da integração'


    if (!data.pageUrl && body.url) data.pageUrl = body.url

    return data
}

const search = (api, query) => CatalogModel.many(Model => 
    Model.find({ api })
    .select('-api')
    .lean()
)

module.exports = {
    search,
    create,
    createMultiple,
    createFromIntegration
}