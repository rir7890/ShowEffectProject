import ChangeEffect from "./ChangeEffect";
import InputColor from "./InputColor";
import { useState } from "react";

const ContentShow = () => {
  const [showEfct, setshowEfct] = useState("Empty");
  const [Inputv, setInputv] = useState("");
  const ShowOnWrite = (color) => {
    setInputv(color);
    setshowEfct(color);
  };

  return (
    <div className="ContentShow">
      <ChangeEffect
        showEfct={showEfct}
        setshowEfct={setshowEfct}
        Inputv={Inputv}
      />
      <InputColor
        Inputv={Inputv}
        setInputv={setInputv}
        ShowOnWrite={ShowOnWrite}
      />
    </div>
  );
};

export default ContentShow;
