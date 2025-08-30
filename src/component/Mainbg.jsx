import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fuma from "../img/fuma.png";
import nike from "../img/nike.png";
import 아디다스 from "../img/아디다스.png";
import Bu from "./homework";

function Mainbg() {
  let navigate = useNavigate();
  let [shose] = useState([fuma, nike, 아디다스]);
  let [classname] = useState(["FC", "SC", "TC"]);
  let [name] = useState(["퓨마", "나이키", "아디다스"]);
  let [price] = useState(["60000", "50000", "40000"]);
  return (
    <>
      <Bu />
      <div className="main-bg"></div>
      <div className="sub-con">
        {shose.map((shose, i) => {
          return (
            <Shoe
              key={i}
              shose={shose}
              price={price[i]}
              classname={classname[i]}
              name={name[i]}
              index={i}
            />
          );
        })}
      </div>
    </>
  );
}

function Shoe(props) {
  let navigate = useNavigate();
  return (
    <div className="all">
      <div className={props.classname}>
        <img
          src={props.shose}
          onClick={() => navigate(`/detail/${props.index}`)}
        ></img>
        <div className="title">
          <h4>{props.name}</h4>
          <h3>가격: {props.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Mainbg;
