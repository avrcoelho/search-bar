import { forwardRef, memo, useId } from 'react';

import { Slot } from './Slot';
import type { SearchBarListItemProps } from './types';
import { useSearchBarContext } from './useSearchBarContext';

export const SearchBarListItem = memo(
  forwardRef<
    HTMLLIElement,
    SearchBarListItemProps & React.HTMLProps<HTMLLIElement>
  >(({ children, itemIndex = 0, asChild, ...restProps }, ref) => {
    const id = useId();
    const { activeIndex, getItemProps, listRef, refs, setOpen } =
      useSearchBarContext();
    const active = itemIndex === activeIndex;
    const Comp = asChild ? Slot : 'li';

    return (
      <Comp
        ref={ref}
        role="option"
        id={id}
        aria-selected={active}
        {...getItemProps({
          ref(node) {
            listRef.current[itemIndex] = node;
          },
          onClick() {
            setOpen(false);
            refs.domReference.current?.focus();
          },
        })}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }),
);
