module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    }
  },
  devServer: {
    // 添加一个代理服务器(方式1)
    // proxy: 'http://localhost:8000'
    
    // 添加一个代理服务器(方式二)
    proxy: {
      // scrapy服务器地址
      '/api': {
        target: 'http://localhost:9080', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //正则表达式替换
        },
      },
      // django服务器地址
      '/django': {
        target: 'http://localhost:8000', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/django': '' //正则表达式替换
        },
      },
    }
  }
}
