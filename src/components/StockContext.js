// StockContext.js
import { createContext } from 'react';

const StockContext = createContext({
  topStocks: [],
  setTopStocks: () => {},
});

export default StockContext;
