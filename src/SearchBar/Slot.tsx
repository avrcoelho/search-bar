import { cloneElement, forwardRef, isValidElement } from 'react';

import type { CustomChildrenProps, SlotProps } from './types';
import { combinedRef } from './utils/combinedRef';

export const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...restProps }, forwardedRef) => {
    if (!isValidElement(children)) {
      return null;
    }

    return cloneElement(children, {
      ...restProps,
      ...children.props,
      ref: combinedRef([forwardedRef, (children as CustomChildrenProps).ref]),
    });
  },
);
