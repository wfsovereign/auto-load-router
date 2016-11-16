Auto Load Router
----------------

使用koa，按照路由文件路径，自动挂载路由，可配置路由前缀前缀，该项目实现基本后端三级分层。



## Installation

```
npm install
```

### Start

```
npm start
```

## Docs

* 通过配置根据目录结构自动挂载路由，

> eg: configs/index 
 
```
router: {
    prefix: {
      admin: '/api/admin',
      web: '/api/web',
      wechat: '/api/wx',
      statistics: '/api/stat'
    }
  }
```

prefix用于配置路由自动挂载。prefix中的**key**是根目录下routes中的目录结构，

> 
routes
├── admin
│   └── user.js
├── statistics
│   └── read.js
├── web
│   └── order.js
├── wechat
│   └── notification.js
└── index.js
>      

而**key**对应的value值则是对应路由的前缀，比如这里的admin，
意思就是admin目录下的所有路由以 /api/admin 打头，再看user.js文件中的具体路由

```
 R.get('/users', User.list);
```

那么我们浏览器访问的地址为 http://localhost:3000/api/admin/users
