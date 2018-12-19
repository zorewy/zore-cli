/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description:
 */
let fs = require('fs');
const { error, log } = require('../lib/logs')

module.exports = (args) => {
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