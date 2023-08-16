import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

/** Car.js컴포넌트 임포트 시키기 */
// import Car from './Car.js';





/* (S) 기존소스 */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
/* (E) 기존소스 */




/** (S) 리액트 렌더HTML 및 JSX설명 */
/** JSX : JavaScript 코드 내에 HTML 태그를 작성할 수 있는 JavaScript XML의 줄임말. */
/** 1. XML 규칙을 따르므로 태그 열고 닫을 시에는 유의해야한다.*/
/** 2. JSX문법안에서 JavaScript코드를 쓰기위해서는 {}로 감싸야 한다. */
// const myElement = (
//   <table>
//       <tr>
//         <th>Name</th>
//       </tr>


//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//   </table>
// );

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myElement);
/** (E) 리액트 렌더HTML */





/** (S) 리액트 Component  */
// function Car() {
//   return <h2>I am a Car!</h2>
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage??</h1>
//       <Car />
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
/** (E) 리액트 Component  */





/** (S) 리액트 Props */
// function Car(props) {
//   return <h2>I am a {props.color} Car!!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car color = "red" />);
/** (E) 리액트 Props */






/** (S) 리액트 모듈 임포트 방법 */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
/** (E) 리액트 모듈 임포트 방법 */





/** (S) 리액트 이벤트(매개변수 있을때) */
// function Football () {
//   const shoot = (a, b) => {
//     alert(b.type);
//   }

//   return (
//     <button onClick={ (e) => shoot("Goal!", e)}>Take the shot!</button>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);
/** (E) 리액트 이벤트 */







/** (S)리액트 조건부 렌더링 */
// function Goal (props) {
//   const isGoal = props.isGoal;

//   if (isGoal) {
//     return 
//   }
// }
/** (E)리액트 조건부 렌더링 */







/** (S) 리액트 리스트 */
// function Car(props) {
//   console.log(props);
//   return <li>I am a {props.id}  {props.brand}</li>;
// }

// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
//   ];

//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((item) => <Car key = {item.id} brand = {item.brand} id = {item.id} />)}
//       </ul>
//     </>

//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />)
/** (E) 리액트 리스트 */







/* (S) 리액트 양식 */
// const x = [1,2,3];
// const y = x.reversese();
// y.push(0);

// console.log(x)
// console.log(y)

// const arr1 = [1,2,3,4,5];
// //const arr2 = [10,9,8,7,6];

// const arr1_copy = arr1.filter(x => x > 3);
// const arr1_copy2 = arr1.map(x => x > 3);
// console.log(arr1);
// console.log(arr1_copy);
// console.log(arr1_copy2);
/* (E) 리액트 양식 */





/** (S) 리액트 useState*/
// const root = document.getElementById('root');
// const App = () => {
//   const [counter, last] = React.useState(0);
//   // 객체를 보유한 단일 Hook
//   // const [car, setCar] = React.useState({
//   //   brand : 'Ford'
//   //   , model : 'Mustang'
//   //   , year : '1964'
//   //   , color : 'red'
//   // });

//   const onClick = () => {
//     // last(counter + 1)보다 좋은 방법, 
//     // last(counter + 1);
//     last((cur) => cur + 1)


//   //   setCar(previousState => {
//   //     console.log(previousState)
//   //     return { ...previousState, color : 'hotPink'}
//   //   })
//   };

//   return (
//     <div>
//       <h3>Total Clicks : {counter}</h3>
//       {/* <h3>My car is brand : {car.brand}</h3> */}
//       <button onClick={onClick}>Click Me!!</button>
//     </div>
//   )
// }
// const Root = ReactDOM.createRoot(root);
// Root.render(<App />);
/** (E) 리액트 useState*/






/** (S) 리액트 useState 2. React에서 form작성방법 */
// const root = document.getElementById('root');
// const App = () => {

//   const [amount, setAmount] = React.useState(0);
//   const [flipped, setFlipped] = React.useState(false);

//   const OnChange = (e) => {
//     // setMinutes("dhkdn rlahWl");
//     setAmount(e.target.value)
//   };

//   const reset = () => {
//     setAmount(0);
//   }

//   const onFlip = () => setFlipped((current) => !current);

//   return (
//     <div>
//       <h1>Super Converter!</h1>
//       <div>
//         <label htmlFor='min'>Minutes</label>
//         <input
//           onChange={OnChange} 
//           value={flipped ? amount * 60 : amount}
//           id='min' 
//           placeholder='Minutes' 
//           type='number' 
//           disabled = {flipped}
//         />
//       </div>

//       <div>
//         <label htmlFor='hour'>Hour</label>
//         <input 
//           onChange={OnChange}
//           value={flipped ? amount : Math.round(amount / 60)} 
//           id='hour' 
//           placeholder='Hours' 
//           type='nuber' 
//           disabled = {!flipped}
//         />
//       </div>
//       <button onClick={reset}>Reset!</button>
//       <button onClick={onFlip}>Flipp</button>
//     </div>
//   )


// }

// const Root = ReactDOM.createRoot(root);
// Root.render(<App />);
/** (E) 리액트 useState 2. React에서 form작성방법*/







/**(S) 리액트 Props, React.memo */
// JSX에서 인라인스타일링. JSX에서 자바스크립트 표현식을 쓰기위해서 {}와 자바스크립트 객체도 {}를 사용하므로 두 세트의 중괄호를 사용하게 된다. {{}}
// const root = document.getElementById('root');

// function Btn({ text, onClick}) { {/* { banana }인자하나값을 보낼 수도 있다.*/}
//   console.log(text, "was render!!");
//   return (
   
//     <button
//       onClick={onClick}
//       style={{
//         background: "tomato"
//         , color : "white"
//         , padding : "10px 20px"
//         , border : 0
//         , borderRadius: 10
//       }}
//     >
//     {text}
//     </button>
//   )
    
// }

// const MemorizedBtn = React.memo(Btn);

// const App = () => {
//   const [value, setValue] = React.useState("Save Changes");
//   const changeValue = () => setValue("Revert Changes");
//   return (
//     <div>
//       {/* JavaScript Btn({banana}) 와 같은 방식 */}
//       {/* 함수형 컴포넌트의 Prop들 */}
//       <MemorizedBtn text={value} onClick={changeValue}/>
//       <MemorizedBtn text="Continue"/>
//     </div>
//   )
// }
// const Root = ReactDOM.createRoot(root);
// Root.render(<App />);
/**(E) 리액트 Props, React.memo  */





/**(S) 리액트 memo */
const root = document.getElementById('root');

const App = () => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  // const calculation = expensiceCalculation(count);
  const calculation = React.useMemo(() => expensiceCalculation(count), [count]);
  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((t) => 
      [...t, "new Todo"]
    );
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

const expensiceCalculation = (num) => {
  console.log("Calculating....");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;

}
const Root = ReactDOM.createRoot(root);
Root.render(<App />);
/**(E) 리액트 memo */




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
