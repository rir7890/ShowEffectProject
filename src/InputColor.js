const InputColor = ({ Inputv, setInputv, ShowOnWrite }) => {
  return (
    <input
      className="InputBox"
      type="text"
      placeholder="Enter Your Color"
      value={Inputv}
      onChange={(e) => ShowOnWrite(e.target.value)}
    />
  );
};

export default InputColor;
