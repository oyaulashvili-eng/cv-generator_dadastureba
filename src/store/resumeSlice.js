import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 1-ლი გვერდი: პირადი ინფო
  firstName: '',
  lastName: '',
  image: null,
  aboutMe: '',
  email: '',
  phone: '',

  // მე-2 გვერდი: გამოცდილება
  position: '',
  employer: '',
  startDate: '',
  endDate: '',
  experienceDescription: ''
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    }
  }
});

export const { updateField } = resumeSlice.actions;
export default resumeSlice.reducer;