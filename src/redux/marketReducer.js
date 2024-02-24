import { SET_ADD, SET_PRODUCT_ITEM, SAVE_PRODUCT_ITEM } from "./actions";

const initialState = {
  productList: [
    {
      id: 0,
      img: 'https://avatars.mds.yandex.net/get-mpic/7519991/img_id3018957578228200860.jpeg/600x800',
      price: 881,
      text: 'Погружной блендер VITEK VT-3407, белый',
    },
    {
      id: 1,
      img: 'https://avatars.mds.yandex.net/get-mpic/4081122/img_id1308339695589500136.jpeg/600x800',
      price: 9593,
      text: 'Монитор 23,8" Xiaomi 1C (75Hz) ELA5321GL',
    },
    {
      id: 2,
      img: 'https://avatars.mds.yandex.net/get-mpic/4114383/img_id5537404186279069864.jpeg/600x800',
      price: 759,
      text: 'Кофе в зернах Jacobs Monarch классический',
    },
    {
      id: 3,
      img: 'https://avatars.mds.yandex.net/get-mpic/11396862/2a0000018c00fe0e0621a0731998098003b7/600x800',
      price: 244,
      text: 'Футболка Апрель',
    },
    {
      id: 4,
      img: 'https://avatars.mds.yandex.net/get-mpic/11401175/2a0000018c6faa3dc8366d89021d7d78ce61/600x800',
      price: 1302,
      text: 'Серьги SOKOLOV, серебро, 925 проба',
    },
  ],
  productItem: {
    id: 0,
    img: "",
    price: 0,
    text: "",
  },
  add: false,
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD:
      return {
        ...state,
        add: action.payload,
      }
    
    case SET_PRODUCT_ITEM:
      return {
        ...state,
        productItem: action.payload,
      }

    case SAVE_PRODUCT_ITEM:
        state.productItem.id = state.productList.length;
        return {
          ...state,
          productList: [...state.productList, state.productItem],
        }

    default:
      return state;
  }
}

export default marketReducer;
