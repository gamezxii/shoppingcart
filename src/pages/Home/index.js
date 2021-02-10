import React, { useContext, useEffect, useState, useRef } from "react";
import Product from "../../components/Product";
import "./home.css";
import { FaCheckCircle } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import Search from "../../components/Search";

const Home = () => {
  const { showpopup } = useContext(CartContext);
  const productContext = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");

  const refProductContext = useRef(() => productContext.dofeed());

  useEffect(() => {
    refProductContext.current()
  }, []);

  const filterProduct = productContext.data.filter((product) => {
    return product.title.includes(searchText);
  });

  return (
    <div className="home">
      {showpopup ? (
        <div className="popup">
          <FaCheckCircle size={36} color="#32CD32" />
          <p>คุณได้ทำการเพิ่มสินค้าลงในรถเข็นแล้ว</p>
        </div>
      ) : null}
      <Search value={searchText} onValueChange={setSearchText} />
      <div className="home__row">
        {filterProduct.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
