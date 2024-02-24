import { Dispatch } from 'redux';
import { IProductItem } from '../components/Add';

declare module './changeMarket.js' {
// Определение типов для экшенов
  export function setForm(dispatch: Dispatch): (productItem: IProductItem) => void;
  export function submitForm(dispatch: Dispatch): () => void;
  export function setAdd(dispatch: Dispatch): (add: boolean) => void;
}
