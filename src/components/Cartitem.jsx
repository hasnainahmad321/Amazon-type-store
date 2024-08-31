import { useContext } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
const Cartitem = ({item}) => {
  const {id,title,image,quantity,price}=item
  const { removeFormatCart,increaseQuality,decreaseQaqlity }=useContext(CartContext)
  return (
    <div className="flex gap-x-3">
      <Link to={"/product/${id}"} className="flexCenter flex-1 m-1 py-1 rounded-xl ring-1
      ring-slate-900/5 h-[74px]">
        <img src={image} alt="" height={55} width={55}className="object-contain aspect-square p-1" />
      </Link>
      <div className="flex flex-[4] flex-col gap-y-2 mr-3">

      <div className="flex justify-between gap-8 items-baseline">
      <div className="medium-14 uppercase line-clamp-2">
        {title}
      </div>
      <div onClick={()=>removeFormatCart(id)} className="cursor-pointer text-gray-50"><MdClose/></div>
      <div className="flexBetween">
        <div className="flexBetween gap-4 ring-1 ring-offset-slate-900/5 px-2">
          <FaMinus onClick={()=>decreaseQaqlity (id)} className="cursor-pointer"/>
            <span>{quantity}</span>
          <FaPlus onClick={()=>increaseQuality(id)} className="cursor-pointer"/>
        </div>
        <p>${price}</p>
        <div className="medium-15">{`$${parseFloat(price*quantity).toFixed(2)}`}</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cartitem
