import { useContext } from 'react';

import { SearchBarContext } from './Context';
import type { SearchBarContextData } from './types';

export const useSearchBarContext = (): SearchBarContextData | never => {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error(
      'SearchBar component must be used within an RootProvider component',
    );
  }
  return context;
};
