import { useNavigate } from "react-router-dom";
function Top() {
  let navigate = useNavigate();
  return (
    <div className="background">
      <div className="Top">
        <div>
          <button onClick={() => navigate("/main")} className="B">Shopping</button>
        </div>
        <div>
          <button onClick={() => navigate("/") } className="B">Home</button>
        </div>
        <div>
          <button className="B" onClick={()=> navigate("/cart")}>Cart</button>
        </div>
        <div>
          <button onClick={() => navigate("/detail/0")} className="B">Detail</button>
        </div>
      </div>
    </div>
  );
}

export default Top;
