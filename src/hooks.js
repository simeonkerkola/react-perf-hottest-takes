import { useContext } from 'react';
import { ActionsContext, PostsStateContext,UsersStateContext } from './context';

export const useActions = () => {
  return useContext(ActionsContext);
};

export const useUsers = () => {
  return useContext(UsersStateContext)
  
  
};

export const usePosts = () => {
  return useContext(PostsStateContext)

};
