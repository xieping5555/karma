module.exports  = function (config) {
    config.set({
        autoWatch: true,   //某一个文件变化时就执行测试用例， default: true

        autoWatchDelay: 1000,  //两次测试用例执行的时间间隔， ms,  default: 250,

        basePath: '',     //根路径，类似webpack中的alias配置，如果值配置了相对路径，那么就会用__dirname来解析

        browserDisconnectTimeout: 1000,   //当测试浏览器在断开连接的时长超过了这个时间，那么karma就会判定浏览器断开连接

        browserConsoleLogOptions: {   //浏览器测试用例的输出配置项
            level: 'debug',
            format: '%b %T: %m',
            path: '/',
            terminal: true
        },

        browserDisconnectTolerance: 0,    //每一次浏览器断开连接都会被判断成一次测试用例执行失败，这个值表示浏览器可允许的断开连接次数（不被当成测试用例执行失败）

        browserNoActivityTimeout: 10000,    //karma等待一个用例执行的最大时间，超出了这个时间，karma就会与浏览器断开

        browsers: ['chrome'],     //测试用例的浏览器列表

        captureTimeout: 60000,    //启动浏览器的超时时间， 超过这个时间浏览器还不响应就会断开之后重新请求连接，超过三次就放弃

        client: {},    //TODO

        colors: true,    //console with colors

        concurrency: Infintiy,    //浏览器并行运行的个数

        crossOriginAttribute: true,    //设置跨域

        customContextFile: null,    //为null时， 使用karma自己的context.html

        customDebugFile: null,     //为null时，使用karma自己的debug.html

        customClientContextFile: null,  //为null时， 使用karma自己的client_width_context.html

        customHeaders: undefined,   //设置http头，

        detached: false,    //为true时会重启一个进程

        exclude: [],   //不需要执行用例的文件，

        failonEmptyTestSuite: true,   //当用例失败时是否抛出警告继续执行用例

        files: [],  //执行用例的文件

        forceJSONP: false,   //改变socket.io的轮询模式，使用JSONP轮询来代替xhr轮询

        frameworks: [],    //要使用的测试框架

        listenAddress: '0.0.0.0',    //服务器地址

        hostname: 'localhost',  //服务器域名

        httpServerOptions: {},

        logLevel: config.LOG_INFO,

        loggers: [{type: 'console'}],   //输出类型

        middleware: [],   //使用的中间件列表，中间件的使用顺序就是数组的顺序

        mime: {},    //文件拓展类型

        beforeMiddleware: [],   //这些中间件会在karma自己的中间件运行之前运行

        plugins: [],   //使用的插件列表

        port: 9876,   //服务端口

        processKillTimeout: 2000,  //强制杀死浏览器进程的超时时间

        preprocessors: {},    //预处理器

        protocol: 'http',   //协议

        httpModule: undefined,    //替代node服务器自身的协议

        proxies: {
            '/static': 'http://gstatic.com',
            '/web': 'http://localhost:9000',
            '/img/': '/base/test/images/',
            '/proxyfied': {
                'target': 'http://myserver.localhost',
                'changeOrigin': true
            }
        },                                      //代理列表

        singleRun: false    //抛出错误取决于用例是否在所有的浏览器中都运行通过了

    })
}