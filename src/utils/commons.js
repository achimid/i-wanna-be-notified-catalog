const clearObj = (obj) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === undefined) delete obj[key]
    })
    return obj
}

const dateBetween = (filter, startDate, endDate) => {
    if (startDate && endDate) filter.createdAt = {'$gte': startDate, '$lt': endDate}
    return filter
}

const isJSON = (text) => { 
    if (typeof text !== "string") { 
        return false
    } 
    try { 
        JSON.parse(text)
        return true
    } catch (error) { 
        return false
    } 
}


module.exports = {
    clearObj,
    dateBetween,
    isJSON
}