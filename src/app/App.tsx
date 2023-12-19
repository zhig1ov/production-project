import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import './styles/index.scss';
import { AboutPage } from "pages/AboutPage/index";
import { MainPage } from "pages/MainPage/index";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';



const App = () => {
const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'./'}>Главная</Link>
      <Link to={'./about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;