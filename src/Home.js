import { useState } from "react";

const Home = () => {
  //   let name = "mario"; // can't be changed later
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("luigi");
    setAge(age + 1);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me Again
      </button>
    </div>
  );
};

export default Home;
