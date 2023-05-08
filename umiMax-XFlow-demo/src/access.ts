import { Foo, User } from "typings";

export default (initialState:User) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  /* const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  return {
    canSeeAdmin,
  }; */

  const { userId, role } = initialState;
 
  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (ownerId:string) => {
      return ownerId === userId;
    },
  };
};
