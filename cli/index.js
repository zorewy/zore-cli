
const program = require( 'commander' );


if (program.args) {
	require( './command/' + program.args + '.js' ) // 根据不同的命令转到不同的命令处理文件
} else {

}
program.parse( process.argv ); //开始解析用户输入的命令