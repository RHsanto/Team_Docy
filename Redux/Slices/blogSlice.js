import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// getting all blogs api called here
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await fetch('http://localhost:5000/blogs')
  const data = await response.json()
  return data
})

// getting single blog depend on id here
// export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
//   const response = await fetch(
//     `http://localhost:5000/blog/${id}`
//   )
//   const data = await response.json()
//   return data
// })

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: null,
    blog: null,
    bloggerDetails: null,
    status: false,
    error: '',
  },

  //  reducers here
  reducers: {
    ADD_TO_BLOGGER_DETAILS: (state, action) => {
      state.bloggerDetails = action.payload
    },
    ADD_TO_BLOG: (state, action) => {
      state.blog = action.payload
      state.error = ''
    },
    ADD_COMMENT: (state, action) => {
      state.blog.comment.push(action.payload)
      state.error = ''
    },
    DELETE_BLOG: (state, action) => {
      state.blogs = state?.blogs?.filter((blog) => blog?._id !== action.payload)
    },
  },
  //   extra reducers here for api
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload
      state.status = true
    })
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = false
    })
    // builder.addCase(fetchBlog.fulfilled, (state, action) => {
    //   state.blog = action.payload
    //   state.status = true
    // })
    // builder.addCase(fetchBlog.pending, (state, action) => {
    //   state.status = false
    // })
  },
})

export const { ADD_TO_BLOG, ADD_COMMENT, DELETE_BLOG, ADD_TO_BLOGGER_DETAILS } =
  blogsSlice.actions
export default blogsSlice.reducer
