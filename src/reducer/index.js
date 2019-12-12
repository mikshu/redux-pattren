import { ADD_TODO, FILTER_TODO } from "../type";
const intialState = {
  data: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let dtArr = state.data.slice();
      dtArr.push({ id: action.id, text: action.payload });
      return {
        ...state,
        data: dtArr
      };
    case FILTER_TODO:
      let newData = state.data.filter(item => item.id !== action.payload);
      return {
        ...state.data,
        data: newData
      };
    default:
      return state;
  }
};
