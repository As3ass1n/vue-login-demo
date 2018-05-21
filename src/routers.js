import UserInfo from './components/UserInfo';
import Login from './components/Login';

const routers = [
  {
    path: '/userinfo',
    name:"UserInfo",
    component: UserInfo
  },
  {
    path: '/',
    component: Login
  }
]

export default routers