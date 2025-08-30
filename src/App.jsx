import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./component/Detail";
import Mainbg from "./component/Mainbg";
import One from "./component/One";
import Top from "./component/Tbar";
import Two from "./component/home";
import Footer from "./component/Madeby";



function App() {
   
  return (
    <>
      <Top />
      <Routes>
        <Route path="/" element={""} />
        <Route path="/main" element={<Mainbg />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
