import { ProductCardsData } from "../data/ProductCardsData";

const ProductCards = () => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <h1 className="sm:flex hidden font-montserrat font-normal text-xl text-custom-gray tracking-[0.0125rem] pb-6 text-center ">
        Featured Products
      </h1>
      <div className="flex flex-col justify-center items-center gap-6 sm:w-full sm:px-52 w-7/12 ">
        <h1 className="font-montserrat font-bold text-center text-2xl text-[#252B42] tracking-wide ">
          BESTSELLER PRODUCTS
        </h1>
        <p className="font-montserrat font-normal text-custom-gray text-center text-base tracking-wide">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center w-full px-10 sm:px-52 py-20">
        {ProductCardsData.map((product) => (
          <div
            key={product.id}
            className="product-card flex flex-col sm:items-start"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="sm:w-full w-[26rem] "
                src={product.image}
                alt="Product Image"
              />
            </div>
            <div className="flex flex-col items-center self-stretch gap-5 sm:px-6 pt-6 pb-9">
              <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                {product.name}
              </h5>
              <p className="font-montserrat font-bold text-custom-gray text-sm ">
                {product.description}
              </p>
              <div className="flex flex-start items-start gap-2">
                <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                  {product.price}
                </h5>
                <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                  {product.price2}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-start">
          <button className="py-4 px-8 bg-custom-white border-2 border-[#23A6F0] rounded-md ">
            <p className="font-montserrat font-bold text-sm text-[#23A6F0] tracking-[0.0125rem] text-center ">
              LOAD MORE PRODUCTS
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
