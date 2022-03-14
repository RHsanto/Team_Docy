import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// getting all blogs api called here
export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await fetch('http://localhost:5000/questions')
    const data = await response.json()
    return data
  }
)

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: null,
    question: null,
    status: false,
    error: '',
  },

  //  reducers here
  reducers: {
    ADD_TO_QUESTION: (state, action) => {
      state.question = action.payload
      state.error = ''
    },
    ADD_ANSWER: (state, action) => {
      state.question.answer.push(action.payload)
      state.error = ''
    },
    DELETE_QUESTION: (state, action) => {
      state.questions = state?.questions?.filter(
        (question) => question?._id !== action.payload
      )
    },
  },
  //   extra reducers here for api
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload
      state.status = true
    })
    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.status = false
    })
  },
})

export const {
  ADD_TO_QUESTION,
  ADD_ANSWER,
  DELETE_QUESTION,
  //   ADD_TO_BLOGGER_DETAILS,
} = questionsSlice.actions
export default questionsSlice.reducer
