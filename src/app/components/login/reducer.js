const initialState = {
  count: 0,
  results:{},
  isLoading:false
};


 const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN_PENDING':
            return {...state, isLoading:true}
         case 'GET_TOKEN_FULFILLED':
            return {...state, results : action.payload.data}
    default:
      return state;
  }
};
export default tokenReducer;