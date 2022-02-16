import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header: AntdHeader } = Layout;

export function Header() {
  return (
    <AntdHeader>
      <div className="logo">
        <span>ProdSale</span>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Cadastros</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products">Produtos</Link>
        </Menu.Item>
      </Menu>
    </AntdHeader>
  );
};