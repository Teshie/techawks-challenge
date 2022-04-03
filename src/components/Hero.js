import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import useStore from "./store/store";

const PRODUCT_QUERY = gql`
  {
    categories {
      categoryId
      name
      products {
        productId
        name
        price
        discount
        unitsSold
        images {
          url
          productId
        }
      }
      subCategories {
        name
        subCategoryId
        categoryId
      }
    }
  }
`;

const Hero = () => {
  const filter = useStore((state) => state.filter);
  const furniture = useStore((state) => state.furnitures);
  const electronic = useStore((state) => state.electronics);
  const accessorie = useStore((state) => state.accessories);
  const vehicle = useStore((state) => state.vehicles);
  const fashion = useStore((state) => state.fashions);
  const { data, loading, error } = useQuery(PRODUCT_QUERY);
  const [showCart, setShowCart] = useState(false);
  const showCartInfo = () => setShowCart(!showCart);
  const cart = useStore((state) => state.cart);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const count = useStore((state) => state.count);
  console.log(cart, "cart info");

  const addToCart = useStore((state) => state.addToCart);
  const add = (name, price) => {
    addToCart(name, price);
  };
  return (
    <div>
      <div className="relative flex space-x-10 justify-center cursor-pointer items-center">
        <div onClick={furniture}>Furnitires</div>
        <div onClick={electronic}>Electroinics</div>
        <div onClick={accessorie}>Vehicles</div>
        <div onClick={vehicle}>Accessories</div>
        <div onClick={fashion}>Fashion</div>
      </div>
      <div className="flex space-x-10 p-4 mt-10">
        <div className=" w-64  bg-gray-200">
          {data?.categories[filter]?.subCategories?.map((launch) => (
            <div key={launch.name}>{launch.name}</div>
          ))}
        </div>
        <div className=" p-10 font text-2xl  bg-gray-500 ">
          {" "}
          <div className="grid grid-cols-4 gap-2">
            {data?.categories[filter]?.products?.map((product) => (
              <div className="h-56" key={product.name}>
                <div className="bg-white rounded h-44">
                  <div>
                    <img
                      className="h-16  object-fit flex justify center items-center"
                      src={product.images[0].url}
                    />
                  </div>
                  <div className="text-xs">{product?.name}</div>
                  <div className="flex justify-evenly">
                    <div>Price</div>
                    <div>{product?.price}</div>
                  </div>
                  <div className="flex space-x-4 justify-center items-center">
                    <button
                      onClick={() => add(product.name, product.price)}
                      class="mt-6 text-sm w-10 h-7 bg-gray-300 hover:bg-gray-400 text-gray-800   rounded-l"
                    >
                      Add
                    </button>
                    <button
                      onClick={showCartInfo}
                      class="mt-6 text-sm w-14 h-7 bg-gray-300 hover:bg-gray-400 text-gray-800   rounded-l"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showCart ? (
        <div className="  absolute bottom-36 right-1 top-36 bg-gray-400 w-[40rem] h-[30rem]">
          <div
            onClick={showCartInfo}
            className="cursor-pointer flex justify-end pr-10 items-end"
          >
            X
          </div>
          <div className="p-10 flex justify-center items-center">
            Your Products
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col space-y-10 justify-center items-center">
              {cart?.map((p) => (
                <div className="flex justify-center items-center space-x-4">
                  <div className="bg-white">
                    <div className="flex  justify-center items-center">
                      <img
                        className="h-10"
                        src="https://shoplly-api.techawks.io/storage/511dBXGmAtL._AC_UL320_.jpg"
                      />
                    </div>
                    <div className="text-sm">{p}</div>
                  </div>

                  <div className="flex w-36 space-x-6">
                    <button onClick={decrement}>-</button>
                    <div>{count}</div>
                    <button onClick={increment}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
