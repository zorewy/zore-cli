/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description:
 */
let fs = require('fs');
const { error, log } = require('../lib/logs')
const exec = require('child_process').exec
module.exports = (args) => {
	if (!args._[1]){
		exec('zore list --help', function (error, stdout, stderr){
			console.log(stdout)
			process.exit(1)
		})
		return
	}
	fs.readdir(process.cwd(), function (err, files){
		let list = files;
		if (!args.all) {
			list = files.filter(function (file){
				return file.indexOf('.') !== 0;
			});
		}
		log( list.join( '\n\r' ) ); //控制台将所有文件名打印出来
	})
}