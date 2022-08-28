import { createSlice} from "@reduxjs/toolkit";
const initialState= [
    { id: '0', name:'cristiano ronaldo'},
    { id: '1', name:'karim l 7oukouma'}
    

]

const usersSlice = createSlice({
name:'user',
initialState,
reducers:{

}
})
export const selectAllUsers = (state ) => state.users;
export default usersSlice.reducer