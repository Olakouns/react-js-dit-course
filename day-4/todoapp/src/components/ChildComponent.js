const ChildComponent = ({ email, handlerClick }) => {
  // props type event : handler______
  return (
    <>
      <h5>Child component</h5>
      <p>
        <span>Email : </span> {email}
      </p>
      <button
        onClick={() => {
          handlerClick();
        }}
      >
        Notify Me
      </button>
      <div>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            console.log("ON CHANGE");
          }}
          defaultValue="DIT"
        />
        <textarea
          onChange={(event) => {
            console.log(event.target.value);
          }}
        ></textarea>
      </div>

      <div
        onClick={() => {
          console.log("Click from DIV");
        }}
        style={{ backgroundColor: "red", cursor: "pointer" }}
      >
        <h6>React js course</h6>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Click from BTN");
          }}
        >
          Propagation
        </button>
      </div>
    </>
  );
};

export default ChildComponent;
