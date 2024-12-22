//bring configureStore from redux toolkit(core redux se aaya hai)
import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoslice'

export const store=configureStore({
    reducer: todoReducer
})//object hi leta hai
