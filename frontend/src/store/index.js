import { configureStore } from '@reduxjs/toolkit'
import productReduser from './sliceProducts'

export const store = configureStore({
    reducer:{
      products:productReduser
    }
})