import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      // Add a checck -> paste already exits wala case

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully.");
    },
    removeFromPastes: (state, action) => {
      const paste = action.payload;

      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >= 0){
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Deleted Successfully.");
      }
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >= 0){
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Updated Successfully.");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = []

      localStorage.removeItem("pastes");
    },
  },
})

export const { addToPastes, removeFromPastes, updateToPastes, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer