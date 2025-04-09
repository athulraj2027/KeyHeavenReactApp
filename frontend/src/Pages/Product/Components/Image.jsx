import React from "react";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

const Product = () => {
  return (
    <InnerImageZoom
      src="https://goal90.shop/cdn/shop/files/Templatecopy3.jpg?v=1723406197"
      zoomSrc="https://goal90.shop/cdn/shop/files/Templatecopy3.jpg?v=1723406197"
      zoomType="hover"
      zoomScale={2}
      zoomPreload={true}
      hideHint={true}
      imgAttributes={{
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain",

        },
      }}
    />
  );
};

export default Product;
