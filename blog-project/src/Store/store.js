import{configureStore} from '@reduxjs/toolkit';
import authsliceReducer from '../Store/authSlice';
const store=configureStore({
    reducer:{
        reducer:authsliceReducer
    
    }
})
export default store;