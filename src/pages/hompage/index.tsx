import { getListProduct } from "@/api/product";
import { Product } from "@/lib/domain/product";
import ListSlider from "@/lib/view/components/Slider";
import About from "@/lib/view/components/about";
import ListItem from "@/lib/view/components/list-items";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListProduct();
      setProduct(res);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <ListSlider data={product} /> */}
      <ListItem data={product} category={"game"} />
      <ListItem data={product} category={"study"} />
      <ListItem data={product} category={"entertainment"} />
      <About />
    </>
  );
};
export default HomePage;
