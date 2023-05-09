// 运行时配置
import {menuItemRender, subMenuItemRender} from "./layout";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ userId: string, role :string}> {
  return { userId: '112',role:'admin', };
}




export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    subMenuItemRender: subMenuItemRender,
    menuItemRender:menuItemRender,
  };
};