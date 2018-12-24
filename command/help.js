/**
 * @author zore.Wang
 * @date 2018/12/19
 * @Description:
 */

const menus = {
	main: `
    zore [command] <options>

    init .............. 项目初始化
    add ............ add {components, handleMiddleWare, sagaSelector, server } to project 
    list ............ 查看当前目录下的文件
    rm ............ 删除文件(开发中)
    version ............ 查看版本
    help ............... 查看帮助菜单`,

	init:
`	usage('<template-name> [project-name]')
	zore init [name] <options>
	zore init [name]
`,

	add:
`	usage('<template-name> [project-name]')
	zore add [name] <options>
	zore add [name] ..... add {components, handleMiddleWare, sagaSelector, server } to project `,

	list:
`  usage('<command> [name]')
	 list -a
	 list --all<options>
	 --all ..... 显示当前目录下的全部文件
	 -a ..... 显示当前目录下的除.开始的全部文件
`,
	test:
`	usage('<command> [name]')
	test -a [name]
	test --all [name]<options>
	test --all ..... 显示当前目录下的全部文件
	test -a ..... 显示当前目录下的除.开始的全部文件
`,

}

module.exports = (args) => {
	const subCmd = args._[0] === 'help'
		? args._[1]
		: args._[0]
	console.log(menus[subCmd] || menus.main)
}