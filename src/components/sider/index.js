import React, { useState } from 'react';

import {
  AntdLayout,
  Menu,
  useMenu,
  useTitle,
  useNavigation,
  Grid,
  Icons,
  useLogout,
  Button
} from '@pankod/refine';

import { antLayoutSider, antSiderMobile } from './styles';

//const { mutate : logout} = useLogout()

export const CustomSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const Title = useTitle();
  const { menuItems, selectedKey } = useMenu();
  const breakpoint = Grid.useBreakpoint();
  const { push } = useNavigation();
  const isMobile = !breakpoint.lg;

  return (
    <AntdLayout.Sider
      collapsible
      collapsedWidth={isMobile ? 0 : 80}
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(collapsed) => setCollapsed(collapsed)}
      style={isMobile ? antSiderMobile : antLayoutSider}
    >
      <Title collapsed={collapsed} />

      <Menu
        selectedKey={[selectedKey]}
        mode="inline"
        onClick={({ key }) => {
          if (!breakpoint.lg) {
            setCollapsed(true);
          }
          push(key)
        }}
        >
        {...menuItems.map(({ icon, label, route }) => {
          const isSelected = (route = selectedKey);
          return (
            <Menu.Item
              style={{
                fontWeight: isSelected ? 'bold' : 'normal',
              }}
              key={route}
              icon={icon}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItem: 'center',
                }}
              >
                {label}
                {!collapsed && isSelected && <Icons.RightOutlined />}
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
<Button>
  </Button>
    </AntdLayout.Sider>
  );
};
