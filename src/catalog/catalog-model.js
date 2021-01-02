const config = require('../config/database-config')
const mongoose = require('../config/mongoose-multi-db')

const schema = mongoose.Schema({
    api: {
        type: [{ type: String }],
        default: undefined,
        required: true
    },
    siteName: { 
        type: String,
        required: false
    },
    siteUrl: { 
        type: String,
        required: false
    },
    tags: {
        type: [{ type: String }],
        default: undefined,
        required: false
    },
    pageUrl: { 
        type: String,
        required: false
    },
    data: { 
        type: Object, 
        required: false 
    }
}, { versionKey: false, timestamps: false })

module.exports = mongoose.model('catalogs', schema, config)


// {
//     api: ['anime', 'fansubs'],
//     tags: ['AnimeTC', 'ATC', 'Fansub', 'Animes', 'Naruto'],
//     siteName: 'AnimesTC',
//     siteUrl: 'https://www.animestc.net/',
//     pageUrl: 'https://www.animestc.net/anime/naruto',
//     data: { type: Object }
// }