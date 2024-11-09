import { createSlice } from "@reduxjs/toolkit";

const initialSlice = createSlice({
    name:'travelerInfo',
    initialState:{
        checkIn:'',
        checkOut:'',
        rooms:1,
        userData:{
            name:'Amit Jha',
            email:'amit.jha6700@gmail.com',
            mobile:'+91 - 7783920293',
            adult:'1',
            child:'2'
        }
    },
    reducers:{
        onUserDataChange: (state,action)=>{
            state.userData[action.payload.name] = action.payload.value
        },
        onRoomCount:(state,action)=>{
            if(action.payload === 'INC'){
                state.rooms += 1
            }else{
                if(state.rooms > 1){
                    state.rooms -= 1
                }
            }
        }
    }
})

const {onUserDataChange, onRoomCount} = initialSlice.actions

export { initialSlice, onUserDataChange, onRoomCount }