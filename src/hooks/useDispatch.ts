import { useDispatch as useDispatchRedux } from 'react-redux';
import { AppDispatch } from '../redux/store/store';

export const useDispatch = () => useDispatchRedux<AppDispatch>();