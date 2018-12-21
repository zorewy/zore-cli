/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description:
 */
let fs = require('fs');
const chalk = require('chalk')
let path = require('path');
const {renderTemplateFiles} = require('./../lib/generator')
const { error, log } = require('../lib/logs')
const cliPath =path.join(__dirname, '../')
module.exports = (args) => {
	console.log(11, args._[1], process.cwd())
	let fileName = args._[1]
	let toPath = './'

	create(toPath, fileName)

}

function create(path, name){
	let componentsTplPath = `${cliPath}/tpl/src/components/Example`
	let middleWareTplPath = `${cliPath}/tpl/src/handleMiddleWare/Example`
	let serverTplPath = `${cliPath}/tpl/src/server/Example`

	let humpName =  name.toLowerCase().substring(0,1).toUpperCase() + name.substring(1)
	let capitalName = name.toUpperCase()
	let lowercaseName = name.toLowerCase()
	// 拷贝文件并渲染
	const meta = {
		name,
		humpName: humpName, // 首字母大写
		capitalName: capitalName, // 全部大写
		lowercaseName: lowercaseName // 全部小写
	}
	renderTemplateFiles(meta, componentsTplPath, `${path}/src/components/${meta.humpName}`)
	renderTemplateFiles(meta, middleWareTplPath, `${path}/src/handleMiddleWare/${meta.humpName}`)
	renderTemplateFiles(meta, serverTplPath, `${path}/src/server/${meta.humpName}`)
	// fs.mkdir(`${path}/src/components/${name}`, err => {
	//
	// 	// 创建失败
	// 	if (err) return error(chalk.red(err));
	//
	//
	//
	// 	// wirteSageSelector(name)
	// })
}

function wirteSageSelector(name){
	name = name.substring(0,1).toUpperCase() + name.substring(1)
	let addTpl = `export const getStore${name}FormData = state => state.${name}Reducer.formData;\n`
	fs.appendFile(`${path}/src/sagaSelector/index.js`, addTpl , (err)  => {
		if (err) return error(chalk.red(err.message));
		console.log("追加成功");
	});
}
