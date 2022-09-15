import { RefObject, useEffect } from 'react';
import { AxiosError } from 'axios';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

export interface IUseIntersectionObserverProps<T = unknown>
  extends IntersectionObserverInit {
  target: RefObject<HTMLDivElement>;
  enabled?: boolean;
  onIntersect: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, AxiosError<any, any>>>;
}

function useIntersectionObserver<T>({
  root,
  rootMargin = '0px',
  threshold = 1.0,
  target,
  enabled = false,
  onIntersect,
}: IUseIntersectionObserverProps<T>) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const options = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      options,
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
}

export default useIntersectionObserver;
