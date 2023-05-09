import { UserOutlined, createFromIconfontCN } from '@ant-design/icons';

import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import {Link} from '@umijs/max';
import {Menu} from 'antd';
import React, { ReactNode} from "react";

interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;

  [key: string]: any;
}


export function subMenuItemRender(itemProps: MenuDataItem) : ReactNode{
  console.log('xxx',itemProps);
  return (
  <div>
    <IconFont type={`icon-facebook`} /> {itemProps.name}
  </div>
  );
}
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export function menuItemRender(itemProps: MenuDataItem, defaultDom: React.ReactNode) : ReactNode{
  console.log('eee',itemProps);


  return (
    <Link {...itemProps} to={itemProps.path}>{defaultDom}</Link>
  );
}


