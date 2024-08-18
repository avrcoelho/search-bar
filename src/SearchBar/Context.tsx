import {
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { createContext, useRef, useState } from 'react';

import type { SearchBarContextData, SearchBarProviderProps } from './types';

export const SearchBarContext = createContext<SearchBarContextData>(
  {} as SearchBarContextData,
);

export const SearchBarProvider = ({
  children,
  isOpen = false,
  dimissEnable = true,
  focusEnable = true,
  flipEnable = false,
}: SearchBarProviderProps): JSX.Element => {
  const [open, setOpen] = useState(isOpen);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listRef = useRef<Array<HTMLElement | null>>([]);
  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flipEnable ? flip({ padding: 10 }) : undefined,
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });
  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context, { enabled: dimissEnable });
  const focus = useFocus(context, { enabled: focusEnable });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav, focus],
  );

  return (
    <SearchBarContext.Provider
      value={{
        context,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        refs,
        floatingStyles,
        open,
        activeIndex,
        setActiveIndex,
        listRef,
        setOpen,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
