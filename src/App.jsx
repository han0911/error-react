import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./component/Detail";
import Two from "./component/home";
import Footer from "./component/Madeby";
import Mainbg from "./component/Mainbg";
import One from "./component/One";
import Top from "./component/Tbar";
export let Context1 = createContext();
function App() {
  let inside = ["내용1입니다", "내용2입니다", "내용3입니다"];
  return (
    <>
      <Top />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/main" element={<Mainbg />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ inside }}>
              <Detail />
            </Context1.Provider>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
