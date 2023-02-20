import { useNavigate } from "react-router-dom";

const Product = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${props.productId}`);
  }

  return (
    <div className={props.class} onClick={handleClick}>
        <img src={props.img} alt={props.name}/>
        <span>{props.price}$</span>
        <p>{props.description}</p>
    </div>
  )
}

export default Product