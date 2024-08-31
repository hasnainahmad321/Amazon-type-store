import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer id="contact" className="bg-black max-padd-container text-white py-12 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
        
          <Link to={"/"}className="bold-24 mb-4"> 
          <h3>
            Hasnain <span className="text-secondary">Store</span>
          </h3>
          </Link>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam exercitationem id ex, eum impedit asperiores quo

          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">Quick Links </h4>
            <ul className="space-y-2 regular-15 text-gray-30">
              <li>
                <Link to="/" className="hover:text-secondary">
                Home
                </Link>

              </li>
      
              <li>
                <Link to="/shop" className="hover:text-secondary">
                shop
                </Link>

              </li>
              <li>
              <Link to="/categories" className="hover:text-secondary">
              Categories
              </Link>
              </li>
              <li>
              <Link to="/contact" className="hover:text-secondary">
              Cantact us
              </Link>
              </li>
            </ul>
          
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">
            E-commerce  link
          </h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li>
              <Link to="/term" className="hover:text-secondary">
              term of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-secondary">
              Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-secondary">
              Shipping policy
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-secondary">
              Return policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start"> 
          <h4 className="bold-20 mb-4">Contact Us</h4>
          <p>
            Email:{" "}
            <a href=" mailto:support@hasnainstore.com" className="hover:text-secondary">
              Support@hasnainstore.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+923456666" className="hover:text-secondary">
              +923456666
            </a>
          </p>
          <p>Address: 123 Main Street,city,country</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p className="text-center text-sm">
          &copy;{new Date().getFullYear()} HasnainStore | All right reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
