import { Space } from "antd";
import { ReactNode } from "react";
import { Header } from "../Header";
import "./allpagesbase.css"

interface AllPagesBaseProps {
  children: ReactNode
}

export function AllPagesBase({ children }: AllPagesBaseProps) {
  return (
    <>
      <Header />
      <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
        <Space direction="vertical" style={{ height: '100vh', justifyContent: 'center' }}>
          {children}
        </Space>
      </Space>
    </>
  )
};
