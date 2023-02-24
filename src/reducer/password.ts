import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveData, readData } from '../lib/file';


export interface Password {
  id: string
  subject: string
  algo: string
  hash: string
  createdAt: string
}

const initialState: Password[] = [];

export const readFromFile = createAsyncThunk(
  'password/readfromfile',
  async () => {
    try {
      const data = await readData();
      console.log("read data ok.");
      return data;
    } catch (e) {
      console.log("readfile error:", e);
    }
  }
);

export const saveToFile = createAsyncThunk(
  'password/savetofile',
  async (contents: string) => {
    try {
      await saveData(contents);
      console.log("save ok");
    } catch (e) {
      console.log("save data error:", e);
    }
  }
);

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Password>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.splice(state.findIndex(item => item.id === action.payload), 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveToFile.fulfilled, (state, action) => {
        // ok
      })
      .addCase(readFromFile.fulfilled, (state, action) => {
        if (state.length === 0) {
          state.splice(0, state.length, ...JSON.parse(action.payload || "[]"))
          console.log("load to store.");
        }
      })
    // .addCase(incrementAsync.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(incrementAsync.rejected, (state) => {
    //   state.status = 'failed';
    // });
  },
});


export default passwordSlice;