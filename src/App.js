import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import main from './pages/main/Main';
import './utils/axiosUtil';
import './utils/store'
//懒加载的loading
const Load = () => {
  return <div>Loading...</div>;
}
//reg懒加载
const Reg = Loadable({
  loader: () => import(/*webpackChunkName:'reg' */'./pages/Reg'),
  loading: Load,
});
//login懒加载
const Login = Loadable({
  loader: () => import(/*webpackChunkName:'login' */'./pages/Login'),
  loading: Load,
});
//忘记密码
const Forgot = Loadable({
  loader: () => import(/*webpackChunkName:'login' */'./pages/Forgot'),
  loading: Load,
});
const CityList = Loadable({
  loader: () => import(/*webpackChunkName:'login' */'./pages/CityList'),
  loading: Load,
});
const Maps = Loadable({
  loader: () => import(/*webpackChunkName:'login' */'./pages/Map'),
  loading: Load,
});
const Search = Loadable({
  loader: () => import(/*webpackChunkName:'login' */'./pages/Search'),
  loading: Load,
});
function App() {
  return (
    <HashRouter >
      <Switch>
        <Route path="/" exact component={main} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/cityList" component={CityList} />
        <Route path="/map" component={Maps} />
        <Route path="/search" component={Search} />
        <Redirect to='/'></Redirect>
      </Switch>
    </HashRouter>
  );
}

export default App;
