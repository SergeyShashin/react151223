import { Messenger } from 'components/Messenger';
import { AboutPage } from 'pages/AboutPage';

export const routes = [
  {
    path: '/',
    element: <Messenger/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/chats/:id',
    element: <Messenger/>
  }

]