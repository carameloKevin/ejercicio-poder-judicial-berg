import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import { IndexView } from './views';

export type MenuProps = Readonly<{
  icon?: string;
  title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
  Override<NonIndexRouteObject, ViewMeta>,
  {
    children?: ViewRouteObject[];
  }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

export const routes: readonly ViewRouteObject[] = [
  {
    children: [
      { path: '/', element: <IndexView />, handle: { icon: 'globe-solid', title: 'Edificios Judiciales' } },
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
