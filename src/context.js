import { bindActionCreators } from '@reduxjs/toolkit';
import { createContext, useMemo, useReducer } from 'react';
import { postActions, postsReducer } from './features/posts';
import { userActions, usersReducer } from './features/users';

import postData from './api/posts.json';
import userData from './api/users.json';

export const UsersStateContext = createContext();
export const PostsStateContext = createContext();
export const ActionsContext = createContext({});

export const Provider = ({ children }) => {
  const [posts, postDispatch] = useReducer(postsReducer, postData);
  const [users, userDispatch] = useReducer(usersReducer, userData);

  const actions = useMemo(
    () => ({
      ...bindActionCreators(postActions, postDispatch),
      ...bindActionCreators(userActions, userDispatch),
    }),
    [postDispatch, userDispatch],
  );

  return (
    <ActionsContext.Provider value={actions}>
      <UsersStateContext.Provider value={ users }>
      <PostsStateContext.Provider value={ posts }>
        {children}
      </PostsStateContext.Provider>
      </UsersStateContext.Provider>
    </ActionsContext.Provider>
  );
};
