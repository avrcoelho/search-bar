import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import type { FunctionComponentElement } from 'react';
import { Children, cloneElement } from 'react';

import { Slot } from './Slot';
import type { SearchBarListItemProps, SearchBarListProps } from './types';
import { useSearchBarContext } from './useSearchBarContext';

export const SearchBarList = ({
  children,
  asChild,
  style,
  ...restProps
}: SearchBarListProps): JSX.Element => {
  const { context, open, getFloatingProps, refs, floatingStyles } =
    useSearchBarContext();

  const childrens = Children.toArray(
    children,
  ) as FunctionComponentElement<SearchBarListItemProps>[];

  const Comp = asChild ? Slot : 'ul';

  return (
    <FloatingPortal>
      {open && (
        <FloatingFocusManager
          context={context}
          initialFocus={-1}
          visuallyHiddenDismiss
        >
          <Comp
            {...getFloatingProps({
              ref: refs.setFloating,
              style: {
                ...floatingStyles,
                overflowY: 'auto',
                ...style,
              },
            })}
            {...restProps}
          >
            {Children.map(childrens, (child, index) =>
              cloneElement(child, {
                ...child.props,
                itemIndex: index,
              }),
            )}
          </Comp>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
};
