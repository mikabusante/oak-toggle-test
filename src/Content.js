import React from "react";
import Collection from "./Collection";

const Content = () => {
  return (
    <div>
      <Collection
        imgUrl="https://bit.ly/2zmyHLX"
        alt="donuts with fruits and flowers"
        title="Baking"
        count="222"
      />
      <Collection
        imgUrl="https://bit.ly/2WPWxsC"
        alt="hand holding book Pachinko by Min Jin Lee"
        title="Book Club"
        count="38"
      />
    </div>
  );
};

export default Content;
