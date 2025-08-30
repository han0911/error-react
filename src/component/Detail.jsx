import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Data from "../data/Shdata";
import fuma from "../img/fuma.png";
import nike from "../img/nike.png";
import shoe1 from "../img/신발1.jpeg";
import shoe2 from "../img/신발2.jpeg";
import shoe3 from "../img/신발3.jpeg";
import 아디다스 from "../img/아디다스.png";

const AlertCSS = styled.div`
  background: #d8d8d8ff;
  width: 100vw;
  margin: 20px;
  color: black;
`;
function Loding() {
  return (
    <div className="modalbg">
      <h3>로딩중입니다</h3>
      <h4></h4>
    </div>
  );
}

function Detail() {
  const [clickCount, setClickCount] = useState(0);
  const [plus] = useState([shoe1, shoe2, shoe3]);
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const [shoes] = useState([fuma, nike, 아디다스]);
  const permanentId = parseInt(id);
  const product = Data.find((item) => item.id === permanentId);
  const [saleAlert, setSaleAlert] = useState(true);
  const [text, setText] = useState("");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSaleAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (text && isNaN(parseInt(text))) {
      alert("숫자만 입력하세요");
    }
  }, [text]);

  const handleMoreClick = () => {
    if (clickCount >= 2) {
      alert("더 이상 가져올 데이터가 없습니다.");
      return;
    }

    // 로딩 시작
    setIsLoading(true);

    const url =
      clickCount === 0
        ? "https://codingapple1.github.io/shop/data2.json"
        : "https://codingapple1.github.io/shop/data3.json";

    axios
      .get(url)
      .then((res) => {

        if (clickCount === 0) {
          setData1(res.data);
        } else {
          setData2(res.data);
        }
        setShowMore(true);
        setClickCount((prevCount) => prevCount + 1);
        console.log(`API 호출 #${clickCount + 1} 성공:`, res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("요청 실패! (오류:", err.message + ")");
        setIsLoading(false);
      });
  };

  if (product) {
    return (
      <div className="dBg">
        {saleAlert && <Alert />}
        {isLoading ? <Loding />:null}
        <img src={shoes[product.index]} alt={product.name} />
        <h4 className="de">상품명: {product.name}</h4>
        <h4 className="de">가격: {product.price.toLocaleString()}원</h4>
        <button className="buy">구입하기</button>
        <input
          type="text"
          className="T"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleMoreClick} disabled={isLoading}>
          더보기
        </button>
        <div className="extra">
          {showMore ? <More plus={plus} data={data1} />:null}
        </div>
        <div className="extra2">
          {showMore && clickCount === 2 && <More2 shoes={shoes} data={data2} />}
        </div>
        <div className="extra3">{clickCount >= 2 && <None />}</div>
        <div>
            <button className = ""></button>
            <button></button>
            <button></button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dBg">
        <h4>상품을 찾을 수 없습니다. (ID: {id})</h4>
      </div>
    );
  }
}
// 3번째부턴 데이터가없음

function None() {
  return (
    <div>
      <div>더이상의 신발은 없습니다</div>
    </div>
  );
}
// 두번째데이터
function More2(props) {
  if (!Array.isArray(props.data) || props.data.length === 0) {
    return null;
  }
  return (
    <>
      {props.data.map((item, i) => {
        return (
          <div key={item.id}>
            <img src={props.shoes[i]} className="i" alt={item.title} />
            <div className="datas">
              <h3>{item.title}</h3>
              <h4>{item.content}</h4>
              <h4>{item.price}</h4>
              <button className="buy">구입하기</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

function More(props) {
  if (!Array.isArray(props.data) || props.data.length === 0) {
    return null;
  }
  return (
    <>
      {props.data.map((item, i) => {
        return (
          <div key={item.id}>
            <img src={props.plus[i]} className="i" alt={item.title} />
            <div className="datas">
              <h3>{item.title}</h3>
              <h4>{item.content}</h4>
              <h4>{item.price}</h4>
              <button className="buy">구입하기</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

function Alert() {
  return <AlertCSS>2초동안 할인함</AlertCSS>;
}

export default Detail;