const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  const newClass = `box ${className}`;
  return (
    <div className={newClass}>
      <h1 className="boxName">{boxText}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Boxes</h1>
    <div className="new-box-container">
      <Box className="box-1" boxText="Small" />
      <Box className="box-2" boxText="Medium" />
      <Box className="box-3" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
