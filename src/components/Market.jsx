import { useDispatch, useSelector } from "react-redux";
import { Add } from "./Add";
import { setAdd } from "../redux/changeMarket";

export const Market = () => {
  const dispatch = useDispatch();
  const { productList, add } = useSelector((state) => state.market);

  const handleAdd = () => {
    setAdd(dispatch)(true);
  }

  return (
    <>
      <div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <h2>Приглядитесь к этим предложениям</h2>
          <button style={{fontWeight: "700", fontSize: "1.5em", color: "red"}}
            onClick={handleAdd}>ADD</button>
        </div>
        <ul>
          {productList.map((item) => (
            <li key={item.id}>
              <img src={item.img} style={{width: "100%", height: "200px"}} />
              <div>
                <span style={{fontWeight: "700", fontSize: "1.5em"}}>{item.price}</span>
                <span>₽</span>
              </div>
              <a href="#">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      {add && <Add />}
    </>    
  )
}
