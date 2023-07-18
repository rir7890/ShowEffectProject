const ChangeEffect = ({ showEfct, setshowEfct, Inputv }) => {
  return (
    <input
      className="ShowEffect"
      style={{ backgroundColor: showEfct }}
      placeholder={Inputv ? Inputv : showEfct}
    />
  );
};

export default ChangeEffect;
