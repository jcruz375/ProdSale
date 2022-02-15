import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Upload } from "antd";
import { Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons';

interface ProductData {
  description: string
  price: number
}

interface FormModalProps {
  isModalVisible: boolean
  handleCloseModal: () => void;
}

export function FormModal({ isModalVisible, handleCloseModal }: FormModalProps) {
  const uploadProps = {
    name: 'file',
    action: 'http://localhost:3000',
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(info.file.name);
      }
    },
  };

  const handleAddNewProduct = (values: ProductData) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title="Novo produto"
      visible={isModalVisible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
    >
      <Form
        name="NewProduct"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleAddNewProduct}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="descrição"
          name="description"
          rules={[{ required: true, message: 'Informe a descrição' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="preço"
          name="price"
          rules={[{ required: true, message: 'Informe o preço' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="imagem"
          name="image"
          rules={[{ required: false, }]}
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Selecione a imagem</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary">
            <PlusOutlined />
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};