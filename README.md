
├─bin             # 脚本启动文件所在目录
├─command         # 命令实现目录，一个命令对应一个文件
├─node_modules    # libraray 目录
└─src             #


├─选择流程           # 初始化流程
	├─模板选择         # 模板选择 目录
	└─simple-template  # 简单的模板 -- git下载 （待完善）
	└─react-template   # react全家桶模板 -- git下载 （待完善）
	└─vue-template     # vue全家桶模板 -- git下载 （待完善）
	└─diy-template     # 自定义模板 -- 本地模板生成（已完成 模板生成，创建模板）


commander
Option(): 初始化自定义参数对象，设置“关键字”和“描述”
Command(): 初始化命令行参数对象，直接获得命令行输入
Command#command(): 定义一个命令名字
Command#action(): 注册一个callback函数
Command#option(): 定义参数，需要设置“关键字”和“描述”，关键字包括“简写”和“全写”两部分，以”,”,”|”,”空格”做分隔。
Command#parse(): 解析命令行参数argv
Command#description(): 设置description值
Command#usage(): 设置usage值

········
npm 安装cli
dependencies 的依赖是自动安装的
devDependencies 的依赖是不会自动安装的
········