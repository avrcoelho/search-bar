import type { MutableRefObject, Ref } from 'react';

/**
 * Handles setting callback refs and MutableRefObjects.
 * @param ref The ref to use for the instance.
 * @param instance The instance being set.
 */
const setRef = <TInstance>(ref: Ref<TInstance>, instance: TInstance): void => {
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref != null) {
    (ref as MutableRefObject<TInstance>).current = instance;
  }
};

export function combinedRef<TInstance>(refs: Ref<TInstance>[]) {
  return (instance: TInstance | null): void =>
    refs.forEach(ref => setRef(ref, instance));
}
