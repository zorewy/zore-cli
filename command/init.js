/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description: init
 */
const inquirer = require( 'inquirer' )
const fs = require( 'fs' )
const axios = require( 'axios' )
const ora = require( 'ora' )
const handlebars = require( 'handlebars' )
// const shell = require('shelljs')
const exec = require('child_process').exec
const download = require('download-git-repo')
module.exports = async (args) => {
	// console.log(args)
	let choices = [ 'webpack-simple-template', 'webpack-react-template', 'webpack-vue-template', 'diy-template'];
	const template = await inquirer.prompt([{ type: 'list', name: 'name', message: '请选择你需要的版本?', choices }])

	if (template.name === 'diy-template') {
		// 自定义
		await inquirer.prompt([{ type: 'checkbox', name: 'name', message: '请选择你需要的依赖?', choices }])
	} else {
		const spinner = ora('正在下载模板...')
		let projectName = template.name
		spinner.start()
		download('https://github.com:zorewy/webpack-template#master', projectName,{clone: true}, (err) => {
			if(err){
				console.log(err)
				spinner.fail();
				// console.log(symbols.error, chalk.red(err))
			}else{
					let name = template.name
				const meta = {
					name,
					description: '213213213',
					author: '21321321'
				}
				const fileName = `${name}/package.json`;
				const content = fs.readFileSync(fileName).toString();
				console.log(content)
				const result = handlebars.compile(content)({
					"name" : 'sadsad',
					description: 'sadsadsassadsad'
				});
				console.log(result)
				fs.writeFileSync(fileName, result);
				console.log(content)
				console.log(err ? 'Error' : 'Success')
				spinner.succeed('下载成功')
			}
		})
		// download('https://github.com/zorewy/webpack-template#master', template.name, {clone: true}, (err) => {
		// 	let name = template.name
		// 	const meta = {
		// 		name,
		// 		description: '213213213',
		// 		author: '21321321'
		// 	}
		// 	const fileName = `${name}/package.json`;
		// 	const content = fs.readFileSync(fileName).toString();
		// 	const result = handlebars.compile(content)(meta);
		// 	fs.writeFileSync(fileName, result);
		// 	console.log(err ? 'Error' : 'Success')
		// })
	}

	// inquirer.prompt([
	// 	{ type: 'list', name: 'repo', message: '你想要安装哪个?', choices },
	// 	{ type: 'confirm', name: ' default', message: 'default (babel, eslint)?'},
	// 	{ type: 'checkbox', name: 'Manually select features', message: 'Manually select features?', choices, default: 'webpack-simple-template'},
	// 	{ type: 'confirm', name: 'OK', message: 'Are you OK?'},
	// ]).then(answers => {
	// 	console.log(answers);
	// });
}

