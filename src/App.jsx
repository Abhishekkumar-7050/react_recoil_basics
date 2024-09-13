// import { useState } from "react";

// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>counter</h1>
//       <Count count={count} setCount={setCount} />
//     </>
//   );
// }

// function Count({ count, setCount }) {
//   return (
//     <>
//       {count}
//       <br />
//       <ButtonCnt count={count} setcount={setCount} />
//     </>
//   );
// }

// function ButtonCnt({ count, setcount }) {
//   return (
//     <>
//       <button
//         onClick={() => {
//           count = count + 1;
//           setcount(count);
//         }}
//       >
//         {" "}
//         Increament
//       </button>

//       <button
//         onClick={() => {
//           count = count - 1;
//           setcount(count);
//         }}
//       >
//         Decreament
//       </button>
//     </>
//   );
// }

// export default App;



// here we are resolving the the propdrilling problen in react which is being above codespace




import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atom/count";
import { useMemo } from "react";

function App() {
  

  return (
    <>
      <h1>counter</h1>

      <RecoilRoot>
      <Count  />
      </RecoilRoot>
    </>
  );
}

function Count() {
  

  return (
    <>
      <CountRenderer/>
      <br />
      <ButtonCnt />
    </>
  );
}

// function CountRenderer(){
//  const count  = useRecoilValue(countAtom);
//  if( count %2 == 0){
//   return(
//     <>
//    {count}
//     </>
//   )
//  }
//  else{
//   return<>          this is the bad approach to do it beacuse we want component render whenever count is even
                       // so state is drived  we should use use memo() hook optimized way is below
//    not a even
//   </>
//  }


// }


function CountRenderer(){
  const count = useRecoilValue(countAtom);
  console.log("count rendere");
  

  return(
      <b>
        {count}
       <br />
        <EvenCountRenderer/>
      </b>       

  )
}


function EvenCountRenderer(){
  const count  = useRecoilValue(countAtom);
  // console.log(" is even render");
  
    // const Iseven = useMemo(()=>{           // its means EvenCounter only rerender whenever count is change 
    //   return count %2 == 0;
    // },[count])
    const Iseven = useRecoilValue(evenSelector);
    
   return(
     <>
     {Iseven ? ` number is even ${count}`: null}
   </>
   )
  }
 
 
 


function ButtonCnt() {
 
  const setCount = useSetRecoilState(countAtom);
  // const count = useRecoilValue(countAtom); // to access the current value of count
                                           // heare we can se that  count is gets update  its is cause of button componenets re
                                           // reredering angain and again

                                           console.log("buttons components  rerendering");
                                           

  return (
    <>
    
      <button
        onClick={() => {
          // count = count + 1;               
          // setCount(count+1);
          setCount(count => count+1);

        }}
      >
        {" "}
        Increament
      </button>

      <button
        onClick={() => {
          // count = count - 1;
          // setCount(count-1);
          setCount(count => count-1);
        }}
      >
        Decreament
      </button>
    </>
  );
}

export default App;




