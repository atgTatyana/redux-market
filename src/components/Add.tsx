import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { setForm, submitForm, setAdd } from "../redux/changeMarket";

export interface IProductItem {
  id: number,
  img: string,
  price: number,
  text: string,
}

interface IMarket {
  productList: IProductItem[],
  productItem: IProductItem,
  add: boolean,
}

export interface IState {
  market: IMarket,
}

export const Add = () => {
  const dispatch = useDispatch();
  const { productItem } = useSelector((state: IState) => state.market);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data = ", productItem);
    submitForm(dispatch)();
    setAdd(dispatch)(false);
    setForm(dispatch)({
      id: 0,
      img: "",
      price: 0,
      text: "",
    })
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(dispatch)({
      ...productItem,
      [name]: value,
    });
  }

  const handleClose = () => {
    setAdd(dispatch)(false);
  }

  return (
    <div className="popup">
      <div style={{position: "relative", backgroundColor: "white", width: "400px"}}>
        <div className="popup-close" onClick={handleClose}>x</div>

        <form className="popup-form" onSubmit={handleSubmit}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="img" style={{textAlign: "left"}}>Фото товара:</label>
            <input type="text" id="img" name="img" value={productItem.img} onChange={handleChange}
              placeholder="https://avatars.mds.yandex.net/get-mpic/4497593/img_id5194758694289069105.png/600x800"/> 
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="price" style={{textAlign: "left"}}>Цена товара:</label>
            <input type="number" id="price" name="price" value={productItem.price} onChange={handleChange}
              placeholder="572" />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="name" style={{textAlign: "left"}}>Название товара:</label>
            <input type="text" id="name" name="text" value={productItem.text} onChange={handleChange}
              placeholder="Мягкая игрушка милый кавайный Кот- акула 20см" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}
