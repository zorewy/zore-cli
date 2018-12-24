/**
 * @Description: 
 * @author zore.Wang
 * @date 2018/12/19 
*/
const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const rm = require('rimraf').sync
const chalk = require('chalk')
const path = require('path')
const _ = require('lodash')
const fs = require( 'fs' )
const { error, log } = require('./../lib/logs')
/**
 *
 * @param metadata
 * @param source
 * @param destination
 * @returns {*}
 */
exports.renderTemplateFiles = (metadata = {}, source, destination = '.') => {
	console.log(metadata = {}, source, destination)
	// console.log(source)
	if (!source) {
		return Promise.reject(new Error(`无效的source：${source}`))
	}

	return new Promise((resolve, reject) => {
		Metalsmith(process.cwd())
			.metadata(metadata) //metadata 为用户输入的内容
			.clean(false)
			.source(source) //模板文件 path
			.destination(destination) //最终编译好的文件存放位置
			.use((files, metalsmith, done) => {
				console.log(files)
				Object.keys(files).forEach(fileName => { //遍历替换模板
					console.log(_.startsWith(fileName, 'public\\'), fileName)
					if (!_.startsWith(fileName, 'public\\')) { //判断是否为字体文件、图片等不能用 handlebar 替换
						const fileContentsString = files[fileName].contents.toString() //Handlebar compile 前需要转换为字符
						files[fileName].contents = new Buffer(Handlebars.compile(fileContentsString)(metalsmith.metadata()))
					}
				})
				done()
			}).build(err => { // build
			rm(`source`)  //删除下载下来的模板文件，‘source’是路径
			if (err) {
				error(chalk.red(`文件创建error: ${err}`))
				return reject(err)
			} else {
				return resolve()
			}
		})
	})
}

const mkdir = (dir) => {
	return new Promise((resolve, reject) => {
		fs.mkdir(dir, (err) => {
			if (err) {
				console.log(err)
				resolve(false)
			} else {
				resolve(true)
			}
		})
	})
}
const getStat = (loadpath) => {
	return new Promise((resolve, reject) => {
		fs.stat(loadpath, (err, stats) => {
			if (err) {
				resolve(false)
			} else {
				resolve(stats)
			}
		})
	})
}

exports.makeDir = async (dir) =>  {
	let tplPathStat = await getStat(dir)
	let pathinfo = path.parse(dir)
	//

	if (tplPathStat && tplPathStat.isDirectory()) {
		error(chalk.red(`Metalsmith build error: 该文件已存在`))
		return tplPathStat
	}
	await mkdir(dir)
}

// module.exports = (api, options, rootOptions) => {
// 	// package.json 添加依赖并安装
// 	api.extendPackage({
//
// 	})
// 	api.downloadTemplates(path,projectName)
// }