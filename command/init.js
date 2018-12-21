/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description: init
 */
const inquirer = require( 'inquirer' )
const fs = require( 'fs' )
const path = require( 'path' )
const chalk = require('chalk')
const axios = require( 'axios' )
const ora = require( 'ora' )
const handlebars = require( 'handlebars' )
const { error, log } = require('../lib/logs')
// const shell = require('shelljs')
const exec = require('child_process').exec
const {renderTemplateFiles, makeDir} = require('./../lib/generator')
const download = require('download-git-repo')
const cliPath =path.join(__dirname, '../')
module.exports = async (args) => {
	let choices = [ 'webpack-simple-template', 'webpack-react-template', 'webpack-vue-template', 'diy-template'];
	const template = await inquirer.prompt([{ type: 'list', name: 'name', message: '请选择你需要的版本?', choices }])
	const spinner = ora('正在处理模板...')
	if (template.name === 'diy-template') {
		// 自定义
		spinner.start()
		const tplPath = `${cliPath}/tpl`;
		const meta = {
			name : 'Example',
			description: 'Example',
			author: 'Example',
			names: 'Example',
		}
		await makeDir(`./${args._[1]}`)
		console.log(111)
		// await inquirer.prompt([{ type: 'checkbox', name: 'name', message: '请选择你需要的依赖?', choices }])
		console.log(meta, tplPath, `${args._[1]}`)
		renderTemplateFiles(meta, tplPath, `./${args._[1]}`)
		spinner.succeed('模板生成--成功')
	} else {
		let projectName = template.name
		spinner.start()
		download('https://github.com:zorewy/webpack-template#master', projectName,{clone: true}, (err) => {
			if(err){
				console.log(err)
				spinner.fail();
				// console.log(symbols.error, chalk.red(err))
			}else{
				spinner.succeed('下载成功')
			}
		})
	}

}


/**
 * 读取路径信息
 * @param {string} path 路径
 */
function getStat(path){
	return new Promise((resolve, reject) => {
		fs.stat(path, (err, stats) => {
			if(err){
				resolve(false);
			}else{
				resolve(stats);
			}
		})
	})
}

/**
 * 创建路径
 * @param {string} dir 路径
 */
function mkdir(dir){
	return new Promise((resolve, reject) => {
		fs.mkdir(dir, err => {
			if(err){
				resolve(false);
			}else{
				resolve(true);
			}
		})
	})
}



/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
async function dirExists(dir){
	let isExists = await getStat(dir);
	//如果该路径且不是文件，返回true
	if(isExists && isExists.isDirectory()){
		return true;
	}else if(isExists){     //如果该路径存在但是文件，返回false
		return false;
	}
	//如果该路径不存在
	let tempDir = path.parse(dir).dir;      //拿到上级路径
	//递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
	let status = await dirExists(tempDir);
	let mkdirStatus;
	if(status){
		mkdirStatus = await mkdir(dir);
	}
	return mkdirStatus;
}
