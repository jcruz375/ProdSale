import { Col, Row } from "antd";
import { ProductCard } from "../../components/ProductCard";

interface ProductsContainerProps {
  category: string;
}

export function ProductsContainer({ category }: ProductsContainerProps) {
  return (
    <>
      <Row align="bottom">
        <Col span="24">
          <h1>Categoria: {category}</h1>
        </Col>
      </Row>
      <Row gutter={30} justify="space-between">
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </>
  )
}