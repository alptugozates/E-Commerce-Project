import ProductCard1 from "../foto/product-card1.png";
import ProductCard2 from "../foto/productCard2.png";
import ProductCard3 from "../foto/productCard3.png";
import ProductCard4 from "../foto/productCard4.png";
import ProductCard5 from "../foto/productCard5.png";
import ProductCard6 from "../foto/productCard6.png";
import ProductCard7 from "../foto/productCard7.png";
import ProductCard8 from "../foto/productCard8.png";

const ProductCards = () => {
  return (
    <div className="flex px-52 justify-end items-center bg-custom-white">
      <div className="container flex flex-col items-center px-0 py-20">
        <div className="row flex flex-col items-center">
          <div className="main-content flex flex-col items-center gap-6">
            <h2 className="font-montserrat font-normal tracking-[0.0125] text-2xl leading-[1.875rem] text-custom-gray ">
              Featured Products
            </h2>
            <h3 className="font-montserrat font-bold text-3xl tracking-[0.00625rem] text-[#252B42] ">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-montserrat font-normal tracking-[0.0125rem] text-sm text-custom-gray ">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div className="row flex justify-center items-start gap-10">
          <div className="product-tab-group flex flex-col items-start shrink-0">
            <div className="tab-content flex flex-col items-start gap-10">
              <div className="tab-one flex flex-col items-start gap-7 py-6">
                <div className="row flex flex-start py-8 gap-3">
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard1} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard2} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard3} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard4} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard5} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row flex flex-start gap-3">
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard1} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard6} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard7} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard8} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 flex flex-col items-start ">
                    <div className="product-card flex flex-col items-start ">
                      <div className="flex flex-col justify-center items-center self-stretch">
                        <img src={ProductCard3} />
                      </div>
                      <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                        <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                          Graphic Design
                        </h5>
                        <p className="font-montserrat font-bold text-custom-gray text-sm ">
                          English Department
                        </p>
                        <div className="flex flex-start items-start gap-2">
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                            $16.48
                          </h5>
                          <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                            $6.48
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
