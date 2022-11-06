import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCard from "../components/ProductCard";

function Store() {
    return (
        <>
            <h1 align="center" className="p3"> Welcome To The Store </h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, index) => (
                    <Col key={product.id} align="center">
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Store;