import React from 'react';
import { Refine } from '@pankod/refine';
import routerProvider from '@pankod/refine-react-router';
import { dataProvider } from '@pankod/refine-supabase';

import '@pankod/refine/dist/styles.min.css';

import { authProvider } from './utilities/auth';
import { supabaseClient } from './utilities/auth';
import { Login } from './pages/login';
import { Signup } from './pages/sign-up';

const App = () => {
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            exact: true,
            component: Signup,
            path: '/signup',
          },
        ],
      }}
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      LoginPage={Login}
      resources={[
        {
          name: 'posts',
        },
      ]}
    />
  );
};

export default App;
