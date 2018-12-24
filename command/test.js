/**
 * @author zore.Wang
 * @date 2018/12/24
 * @Description:
 */
const exec = require('child_process').exec
module.exports = (args) => {
	 if (!args._[1]){
		 exec('zore test --help', function (error, stdout, stderr){
			 console.log(stdout)
			 process.exit(1)
		 })
	 }
}
