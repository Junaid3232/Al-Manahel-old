type ScreensWithoutParams =
  | 'auth'
  | 'company-code'
  | 'login-screen'
  | 'code-verify-screen'
  | 'home-screen';

interface ScreensWithParams {
  //   'home-screen': { id: string; alt: boolean };
}

export type Routes = keyof ScreensWithParams | ScreensWithoutParams;
export type RouteParam<K extends Routes | undefined = undefined> =
  K extends keyof ScreensWithParams ? ScreensWithParams[K] : undefined;
export type RouteParams = {[K in Routes]: RouteParam<K>};
export type RoutesRecord = Record<Routes, RouteParams>;
