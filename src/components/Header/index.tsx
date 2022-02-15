import { Layout, Menu } from "antd";

const { Header: AntdHeader } = Layout;

export function Header() {
  return (
    <AntdHeader>
      <div className="logo">
        <span>ProdSale</span>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Cadastros</Menu.Item>
        <Menu.Item key="2">Produos</Menu.Item>
      </Menu>
    </AntdHeader>
  );
};