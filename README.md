
├─bin             # 脚本启动文件所在目录
├─node_modules    # libraray 目录
└─src             # 开发目录
    ├─command     # 命令实现目录，一个命令对应一个文件
    └─utils       # 工具目录"# zore-cli"


├─command           # 脚本命令
	├─list  -l        # libraray 目录
	└─init   -i       # 开发目录
	└─create  -c      # 开发目录
	└─install  -i     # 开发目录
	└─help -h         # 开发目录


Option(): 初始化自定义参数对象，设置“关键字”和“描述”
Command(): 初始化命令行参数对象，直接获得命令行输入
Command#command(): 定义一个命令名字
Command#action(): 注册一个callback函数
Command#option(): 定义参数，需要设置“关键字”和“描述”，关键字包括“简写”和“全写”两部分，以”,”,”|”,”空格”做分隔。
Command#parse(): 解析命令行参数argv
Command#description(): 设置description值
Command#usage(): 设置usage值
