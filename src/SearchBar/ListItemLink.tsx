import { forwardRef } from 'react';

import { Slot } from './Slot';
import type { SearchBarListItemLinkProps } from './types';

export const SearchBarListItemLink = forwardRef<
  HTMLAnchorElement,
  SearchBarListItemLinkProps
>(({ children, asChild, ...restProps }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp {...restProps} ref={ref}>
      {children}
    </Comp>
  );
});
