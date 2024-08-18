import { type KeyboardEvent } from 'react';

import type { SearchBarInputProps } from './types';
import { useSearchBarContext } from './useSearchBarContext';

export const SearchBarInput = ({
  as: As,
  ...restProps
}: SearchBarInputProps): JSX.Element => {
  const {
    refs,
    getReferenceProps,
    activeIndex,
    setActiveIndex,
    setOpen,
    listRef,
  } = useSearchBarContext();

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && activeIndex != null) {
      const childNodes = listRef.current[activeIndex]?.childNodes;
      if (childNodes) {
        (childNodes[0] as HTMLAnchorElement)?.click();
      } else {
        listRef.current[activeIndex]?.click();
      }
      setOpen(false);
      setActiveIndex(null);
    }
  };

  const inputProps = getReferenceProps({
    ref: refs.setReference,
    'aria-autocomplete': 'list',
    onKeyDown,
    ...restProps,
  });

  const Element = As ?? 'input';

  return <Element {...inputProps} />;
};
