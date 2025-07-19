// ✅ Correct version 2 (preferred for readability)
import { useState } from "react";
import Counter, {User, Dishes, Toy, propObject, College, Student, Candidate, Wrapper} from "./Counter";
import Checkboxes, { RadioButton , UserArray} from "./Checkboxes";
import Singer from "./ReuseComponent";
import Clock from "./Clock";
import axios from "axios";
import Dollege from "./College";
function App2() {
    // let fruit= "Apple";
    // const handlefruit=()=>{
    //     fruit="Banana";
    // }
    const [fruit, setFruit]= useState("Apple");
        // old      updated val
    const handlefruit=()=>{
        setFruit("Banana");
    }
  const [show, setShow]=useState(true);
  const [set, setC]=useState(0);
  let homeName = "Golu";
  let ageC = 26;

  let collegeNames=['IET', 'SRCC', 'DTU', 'IGDTUW']; 

  const [student, setStudent]=useState("Sam");


  const [val, setVal]=useState("Shradha");

  const [name, setName]= useState("");
  const [Password, setpassword]= useState("");
  const [Email, setEmail]= useState("");

  const[color, setColor]=useState("green");//digital clock

  // Nested loop
  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Sukanya",
          age: "18",
          email: "sk@test.com",
        },
        {
          name: "Sukanya",
          age: "18",
          email: "sk@test.com",
        },
        {
          name: "Shreya",
          age: "19",
          email: "sh@test.com",
        },
        {
          name: "Yashika",
          age: "18",
          email: "yk@test.com",
        },
      ],
    },
    {
      name: "IIT",
      city: "Delhi",
      website: "www.iet.com",
      student: [
        {
          name: "Sukanya",
          age: "18",
          email: "sk@test.com",
        },
        {
          name: "Aman",
          age: "20",
          email: "aman@test.com",
        },
        {
          name: "Abhishek",
          age: "20",
          email: "ak@test.com",
        },
      ],
    },
  ];


  return (
    <div>
      <h1>State in React js</h1>
      <h1>{fruit}</h1>
      {/* <button>Change the fruit {handlefruit}</button> */}
      {/* fruit not changes to banana in ui ..use states to display changes */}
      <button onClick={handlefruit}>Change the fruit </button>
      <Counter />
      <h1>Click me to change the dish</h1>
      <button onClick={() => setShow(!show)}>Tap</button>
      {show ? <Dishes /> : <h4>Dish changed to pizza</h4>}
      <User />
      set==0?<h3>Condition 0</h3>: null
      {/* PROPS */}
      <h2>Props in react using Toy function</h2>
      <Toy data="Shreya" age={23} />
      <Toy data={homeName} age={ageC} />
      <p>Showing propObject</p>
      <p>Place:{propObject.place} </p>
      <p>Pin code: {propObject.pin}</p>
      <p>District: {propObject.district}</p>
      <College names={collegeNames[3]} />
      {/* to print name if student name exists and its name is there in Student component also*/}
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Bhaskar")}>Update Student Name</button>
      {/* DEFAULT PROPS-When the name value is not passes then the default value set inprops will be displayed */}
      <Candidate name="Anil" />
      <Candidate name="Sami" />
      <Candidate />
      {/* STYLE WITH PROPS */}
      {/* <Wrapper/> */}
      <Wrapper color="orange">
        <h2>Style with props</h2>
      </Wrapper>
      <Wrapper>
        <h2>Learn styling using props</h2>
      </Wrapper>
      {/* INPUT FIELD VALUE IS DISPLAYED AND IF CLEARED THEN IT WILL BE CLEARED FROM PLACEHOLDER AS WELL*/}
      <h2>Get input field value</h2>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter user name"
      />
      <h2>{val}</h2>
      <button onClick={() => setVal("")}>Clear value</button>
      {/* CONTROLLED COMPONENT */}
      <h2>Controller component</h2>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter pname"
        />
        <br></br>
        <input
          type="text"
          value={Password}
          onChange={(event) => setpassword(event.target.value)}
          placeholder="Enter password"
        />
        <br></br>
        <input
          type="text"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
        <br></br>
        <button>Submit</button>
        <button
          onClick={() => {
            setEmail("");
            setName("");
            setpassword("");
          }}
        >
          {" "}
          Clear
        </button>
        <h3>{name}</h3>
        <h3>{Password}</h3>
        <h3>{Email}</h3>
      </form>
      {/* HANDLE CHECKBOXES */}
      <Checkboxes />
      <RadioButton />
      <UserArray />
      <h2>Digital Clock</h2>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="beige">Beige</option>
        <option value="yellow">Yellow</option>
        <option value="aqua">Aqua</option>
      </select>
      <Clock color={color} />
      <h3>Nested looping</h3>
      {collegeData.map((c, index) => (
        <div key={index}>
        <Dollege c={c}/>
        </div>
      ))}
    </div>
  );
}
export default App2; 