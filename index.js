import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
/** 2. JSX문법안에서 JavaScript코드를 쓰기위해서는 ()로 감싸야 한다. */
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
function Car(props) {
  console.log(props);
  return <li>I am a {props.id}  {props.brand}</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((item) => <Car key = {item.id} brand = {item.brand} id = {item.id}/>)}
      </ul>
    </>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />)
/** (E) 리액트 리스트 */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
