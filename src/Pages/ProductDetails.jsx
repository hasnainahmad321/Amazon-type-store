import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { ProductContext } from "../context/ProductContext"

const ProductDetails = () => {
  const {id} =useParams()
  const {products}= useContext(ProductContext)
  const {addtoCart}=useContext(CartContext)

 const product =products.find((item)=>{
return item.id===parseInt(id)
 })
 if(!product){
  return(
    <section className="h-screen flexCenter">
      <h3 className="h3"> ....Loading</h3>
    </section>
  )
 }

 const {title, price,description,image}=product
  return (
    <section className="max-padd-container py-28 xl:py-32">
      <div>
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="flex-1 flexCenter">
            <img src={image} alt="productImg" height={255} width={255}
            className="object-contain aspect-square p-1" />
          </div>
          <div>
            <h3 className="h3"> {title} </h3>
            <h5 className="bold-24">{price} </h5>
            <p className="my-8">{description} </p>
            <button onClick={()=>addtoCart(product,product.id)} 
            className="btn-pink"> Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
