'use client';
import { Provider } from 'react-redux';
import { appStore } from './appStore';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={appStore}>{children}</Provider>;
};
