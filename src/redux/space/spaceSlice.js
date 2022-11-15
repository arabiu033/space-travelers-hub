/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api';

export const getMissions = createAsyncThunk('space/getMissions', async () => {
  try {
    const response = await api.getMissions();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const spaceSlice = createSlice({
  name: 'space',
  initialState: {
    isLoading: 'idle' || 'loading' || 'succeeded' || 'failed',
    status: false,
    missions: [],
  },
  reducers: {
    joinMission: (state, action) => {
      const { id } = action.payload;
      const newMission = state.missions.map((mission) => {
        if (mission.id !== id) { return mission; }
        return { ...mission, joined: true };
      });
      state.missions = newMission;
    },
    leaveMission(state, action) {
      const { id } = action.payload;
      const newMission = state.missions.map((mission) => {
        if (mission.id !== id) { return mission; }
        return { ...mission, joined: false };
      });
      state.missions = newMission;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        console.log(action.payload);
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = 'failed';
      });
  },
});

// export const {} = spaceSlice.actions;

export default spaceSlice.reducer;
