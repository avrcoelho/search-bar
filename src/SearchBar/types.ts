import type {
  UseFloatingReturn,
  UseInteractionsReturn,
} from '@floating-ui/react';
import type {
  Dispatch,
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLProps,
  ReactElement,
  ReactNode,
  RefAttributes,
  SetStateAction,
} from 'react';

type AsChildProps = {
  asChild: true;
  children: ReactElement;
};

type WithoutAsChildProps = {
  asChild?: false;
  children: ReactNode;
};

type BaseProps = AsChildProps | WithoutAsChildProps;

export type SearchBarProviderProps = {
  children: ReactNode;
  dimissEnable?: boolean;
  focusEnable?: boolean;
  flipEnable?: boolean;
  isOpen?: boolean;
};

export type SearchBarContextData = Pick<
  UseInteractionsReturn,
  'getReferenceProps' | 'getFloatingProps' | 'getItemProps'
> &
  Pick<
    UseFloatingReturn<HTMLInputElement>,
    'refs' | 'floatingStyles' | 'context'
  > & {
    open: boolean;
    activeIndex: number | null;
    setActiveIndex: Dispatch<SetStateAction<number | null>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
    listRef: React.MutableRefObject<(HTMLElement | null)[]>;
  };

export type SearchBarListItemProps = BaseProps & {
  itemIndex?: number;
};

export type SearchBarListProps = BaseProps & HTMLProps<HTMLUListElement>;

export type SearchBarListItemLinkProps = BaseProps &
  HTMLProps<HTMLAnchorElement>;

export type SearchBarInputProps = Omit<HTMLProps<HTMLInputElement>, 'as'> & {
  as?: ForwardRefExoticComponent<
    Omit<HTMLProps<HTMLInputElement>, 'ref'> & RefAttributes<HTMLInputElement>
  >;
};

export type SlotProps = {
  children: ReactNode;
};

export type CustomChildrenProps = ReactNode & {
  ref: ForwardedRef<HTMLElement>;
};
