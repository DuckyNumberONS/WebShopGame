import { Product } from "@/lib/domain/product";
import React from "react";
import Slider from "react-slick";

interface ListSliderProps extends React.PropsWithChildren<{}> {
  data: Array<Product>;
}

const ListSlider: React.FC<ListSliderProps> = ({ data }) => {
  const settings = {
    infinite: true,
    // speed: 500,
    // slidesToShow: 6,
    // slidesToScroll: 5,
    arrows: false,
  };
  return (
    <section>
      <div>
        <Slider {...settings}>
          <div>
            {data
              .filter((item) => item.isHot === true)
              .map((items) => (
                <div key={items._id}>
                  <img src={items.urlImage} alt="" />
                </div>
              ))}
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default ListSlider;
