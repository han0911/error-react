import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Changename, increaseCount } from "../store/Store";

function Cart() {
  let dispatch = useDispatch();
  let data1 = useSelector((state) => state.D);
  let storeName = useSelector((state) => state.F);

  console.log(data1);

  return (
    <div>
      {storeName.name}의 가게
      {storeName.age}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 2}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => {
                    dispatch(increaseCount(item.id));
                    dispatch(Changename());
                  }}>
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;