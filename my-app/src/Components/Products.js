import React from "react";
import {  useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cardSlice";
import { getProducts } from "../store/productSlice";

export default function Products() {
  const dispatch = useDispatch()
  const {data:products} = useSelector(state => state.products)
  
  useEffect(() => {
    dispatch(getProducts())
  },[]);

  const addToCard=(product)=>{
    dispatch(add(product))
  };

  const cards = products?.map((product) => (
    <div className="col-md-3" key ={product.id}>
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "160px", height: "160px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={()=> addToCard(product)}>Add to Card</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}
