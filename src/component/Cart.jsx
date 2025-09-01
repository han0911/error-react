import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  // state.D에서 데이터 가져오기
  let data1 = useSelector((state) => state.D);

  console.log(data1);

  return (
    <div>
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
                <td>안녕</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;