import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import { IndexView } from './views';
import { EdificioView } from './views/edificio'; 
import { DomicilioView } from './views/domicilio'; 
import { DependenciaView } from './views/dependencia';
import { CartaEdificio } from './components/cartas/cartaEdificio';

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
      { path: '/edificios', element:<EdificioView />, handle: { icon: 'globe-solid', title: 'Edificios Judiciales' }},
      { path: '/domicilios', element:<DomicilioView />, handle: { icon: 'globe-solid', title: 'Domicilios Judiciales' }},
      { path: '/dependencias', element:<DependenciaView />, handle: { icon: 'globe-solid', title: 'Dependencias Judiciales' }}
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
