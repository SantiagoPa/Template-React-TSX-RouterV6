import { lazy, LazyExoticComponent } from 'react';
// import { LazyPages1, LazyPages2, LazyPages3 } from '../01-lazyload/pages/';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string,
}


const Lazy1 = lazy(() => import(/* webpackChunkName: "Lazypage1" */ '../01-lazyload/pages/LazyPages1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazypage2" */ '../01-lazyload/pages/LazyPages2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazypage3" */ '../01-lazyload/pages/LazyPages3'))


export const routes: Route[] = [
    {
        to: '/lazy-1',
        path: 'lazy-1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy-2',
        path: 'lazy-2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy-3',
        path: 'lazy-3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
];