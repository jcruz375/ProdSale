import { PlusOutlined } from '@ant-design/icons';
import { Button, Card } from "antd";
import { useState } from "react";
import { AllPagesBase } from "../../components/AllPagesBase";
import { FormModal } from "../../components/FormModal";
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
      <AllPagesBase>
        <Card title="Deseja cadastrar novos produtos?">
          <Button type="primary" onClick={handleOpenModal}>
            <PlusOutlined />
            Cadastrar
          </Button>
          <FormModal isModalVisible={isModalVisible} handleCloseModal={handleCloseModal} />
        </Card>
      </AllPagesBase>
    </>
  );
};