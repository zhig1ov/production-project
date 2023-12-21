import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(RouteConfig).map(({path, element}) => (
        <Route
            key={path}
            path={path}
            element={(
                <div className='page-wrapper'>
                    {element}
                </div>
            )}/>
      ))}
    </Routes>
  </Suspense>
  );
};

export default AppRouter;