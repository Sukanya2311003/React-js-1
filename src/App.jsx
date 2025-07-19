import Header from "./Header";
import Login , {Profile, Setting, Userkey}from "./userComponents";
import Todo from "./Todo";

function App(){
  
  const userName= "Rahul";
  
  return (
    <div>
      <Header />
      <button onClick={() => alert("hiii")}>Click</button>
      <h1>Hello</h1>
      <h1>My name is Sukanya</h1>
      <h2>{name? name:"User not found"}</h2>
      <h1>Your name is {userName}</h1>
      <Todo></Todo>
      

      <h2>It is a component with sum {sum(10, 80)}</h2>
      <Fruit></Fruit>
      <Login></Login>
      <Profile></Profile>
      <Setting></Setting>
      <h1>{Userkey}</h1>
      <App1></App1>
      <h1>{operation(10,20,'-')}</h1>
      <h2>{userObject.email}</h2>
      <h2>{userArray[0]}</h2>
      <input type="text" value={userName} id="firstname"></input>
      <br/>
      <img src={path}/>

      <h1>Event and f call</h1>
      <button onClick={()=>veggies("Avocado")}>Avocado</button>
    </div>
  );
}
function Fruit(){
  return(
    <h1>Apple</h1>
  )
}

function App1(){
 let x=60;
 let y=98;
 return (
   <>
     <h1>Sum is{x + y}</h1>
   </>
 );
}
function sum(a, b){
  return a +b
}
// this can't be called unlike color that are called as tags .

function operation(a,b,op){
  if(op=='+'){
    return a+b;
  }
  else if(op=='-'){
    return a-b;
  }else{
    return a*b;
  }
}
// OBJECTS
const userObject = {
  firstname: "Aman",
  email: "aman@test.com",
  age: 34,
};

// ARRAY
const userArray=['sam', 'tina', 'golu'];
// IMAGES
let path =
  "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/pug-and-dachshund-cropped.jpg?h=320&iar=0&w=710&hash=4EFC85AEE81CC2DAC436AB398F0D1A33";

  // ARROW FUNCTIONS
  const veggies= (Vname)=>{
    alert(Vname);

  }

export default App;
// All react components names are initialised with CAPITAL letters which helps react to find out about it. If small letters are used then they could be mistaken with html tags which re in small letters.