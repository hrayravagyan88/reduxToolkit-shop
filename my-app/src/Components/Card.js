import React from 'react'
import { useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { remove } from "../store/cardSlice";

export default function Cards() {
let products = useSelector(state => state.card);
const dispatch = useDispatch()

const removeFromList = (id)=>{
  dispatch(remove(id))
}

console.log(products)
const cards = products.map((product) => (
  <div className="col-md-12" key ={product.id}>
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
          <Button variant="primary" onClick={()=> removeFromList(product.id)}>Remove From Bug</Button>
        </Card.Footer>
    </Card>
  </div>
));
  return (
    <>
      <div className="row">{cards}</div>
    </>
  )
}
