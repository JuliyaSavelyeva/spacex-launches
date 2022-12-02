import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { loadLaunches } from './launchesAPI';
import { LaunchType, PostLaunchData } from '../../models/launches';

export interface LaunchesState {
  launches: LaunchType | null;
  status: 'success' | 'loading' | 'failed';
}

const initialState: LaunchesState = {
  launches: null,
  status: 'success'
};

export const getAllLaunches = createAsyncThunk(
  'Launches/getLaunches',
  async ({ page, success, rocket, date }: PostLaunchData) => {
    const { data } = await loadLaunches({ page, success, rocket, date });
    console.log(data);
    let launchData = data.docs;

    if (rocket) {
      launchData = launchData.filter((launch: any) => launch.rocket.name === rocket);
    }

    if (date) {
      launchData = launchData.filter((launch: any) => launch.date_local.startsWith(date));
    }

    return {
      docs: launchData.map((launch: any) => ({
        flightNumber: launch.flight_number,
        mission: launch.name,
        rocket: launch.rocket.name,
        launchDate: launch.date_local,
        success: launch.success,
        details: launch.details,
        img: launch.links.flickr.original[0] ?? launch.links.patch.large,
        id: launch.id
      })),
      totalPages: data.totalPages,
      totalDocs: data.totalDocs
    };
  }
);

export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    clearLaunches: (state) => {
      state.launches = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLaunches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllLaunches.fulfilled, (state, action) => {
        state.status = 'success';
        state.launches = {
          docs: state.launches ? state.launches.docs.concat(action.payload.docs) : action.payload.docs,
          totalPages: action.payload.totalPages,
          totalDocs: action.payload.totalDocs
        };
      })
      .addCase(getAllLaunches.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { clearLaunches } = launchesSlice.actions;
export const selectCount = (state: RootState) => state.launches;

export default launchesSlice.reducer;
