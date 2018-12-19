/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description:
 */
const { version } = require('../package.json')

module.exports = (args) => {
	console.log(`v${version}`)
}