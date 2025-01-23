import * as views from '@/views';

export function lazyLoad(view: keyof typeof views) {
  return () => {
    const component = views[view];
    if (!component) {
      return views.NotFound;
    }
    return component;
  };
}
