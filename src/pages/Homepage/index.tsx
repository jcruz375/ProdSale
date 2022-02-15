import { Button, Card, Space } from "antd";
import { useState } from "react";
import { FormModal } from "../../components/FormModal";
import { Header } from "../../components/Header";
import { PlusOutlined } from '@ant-design/icons';
import './homepage.css';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header />
      <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
        <Space direction="vertical" style={{ height: '100vh', justifyContent: 'center' }}>
          <Card title="Deseja cadastrar novos produtos?">
            <Button type="primary" onClick={handleOpenModal}>
              <PlusOutlined />
              Cadastrar
            </Button>
            <FormModal isModalVisible={isModalVisible} handleCloseModal={handleCloseModal} />
          </Card>
        </Space>
      </Space>
    </>
  );
};