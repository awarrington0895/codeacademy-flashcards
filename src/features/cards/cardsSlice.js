import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, { payload }) => {
      state.cards[payload.id] = payload;
    }
  }
});

const { addCard } = cardsSlice.actions;

const selectCards = state => state?.cards?.cards;

export { selectCards, addCard };

export default cardsSlice.reducer;