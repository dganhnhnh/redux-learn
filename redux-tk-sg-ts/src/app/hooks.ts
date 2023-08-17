import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
// nếu dùng ueSelector thì phải đi kèm type của store 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
