import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  subscriptionReducer,
  userReducer,
} from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
}); 

export default store;

// export const server = 'https://knowledge-nexus-server-new.vercel.app/api/v1';
// export const server = 'http://localhost:4000/api/v1';
// export const server = 'https://knowledgenexusrender.onrender.com/api/v1';
export const server = 'https://knowledge-nexus-server.cyclic.app/api/v1';
