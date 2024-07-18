// import logo from './logo.svg';
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FComponent from "./components/FComponent";
import ParentComponent from "./components/ParentComponent";

function App() {
  const DIT = "Hello DIT!";
  const color = {
    color: "red",
    backgroundColor: "orange",
  };
  const isVisible = false;

  const tab = ["Tab 1", "Tab2", "Tab3", "Tab4", "Tab5"];
  const tab2 = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];

  const [parentName, parentDescription] = ["Title", "Some description"];

  const clickMe = () => {
    console.log("Click Me from parent");
  }

  return (
    <>
      <div className="bgWhitesmoke">
        <h1 style={color}>{DIT}</h1>
        <FComponent
          name={parentName}
          description={parentDescription}
          handlerClick={clickMe}
        />
        <ClassComponent />
        {/* { condition ? value : !value} */}
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            officia, aperiam qui cum maiores ad accusamus! Soluta, ipsum eius.
            Cum obcaecati totam est blanditiis reprehenderit id ab eum quia
            ullam! Minima atque earum officiis. Temporibus iste officiis totam
            delectus officia soluta, debitis doloremque aut nesciunt dolor
            nihil? Nulla dolorum quo provident similique sapiente adipisci
            repellat, sed, nostrum ea blanditiis
          </p>
        )}
      </div>
      <div>
        {tab.map((value) => (
          <h6 key={value}>{value}</h6>
        ))}

        {tab2.map((value) => (
          <h5 key={value.id}>{value.name}</h5>
        ))}
      </div>
      {/* Props type data and event */}
      <div>
          <h1>Props type data and event</h1>
          <ParentComponent />
      </div>
    </>
  );
}

export default App;
