export const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon:'HomeTwoTone',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' 测试',
      path: '/test',
      routes: [
        {
          name: '欢迎',
          path: '/test/welcome',
          icon: 'HomeTwoTone',
          component:'./Test/Welcome',
        },
      ],
    },
  ]