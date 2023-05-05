const {merge} = require("webpack-merge");
const commonConfig = require('./build_utils/basic.config')
const developmentConfig = require('./build_utils/development.config')
const productionConfig = require('./build_utils/production.config')

module.exports = (env) => {
    if(env.production === "true") {
        return merge(commonConfig(env), productionConfig(env));
    } else {
        return merge(commonConfig(env), developmentConfig(env));
    }
}