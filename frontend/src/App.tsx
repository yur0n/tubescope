import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
  houseLightTheme,
  houseDarkTheme,
} from "react-admin";
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from './providers/dataProvider';
import { authProvider } from './providers/authProvider';
import { i18nProvider } from './providers/i18nProvider';

import { ChannelList } from './resources/Channels';
import { VideoList } from './resources/Videos';

export const AdminDashboard = () => (
    <BrowserRouter>
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            loginPage={<LoginPage providers={['apple']} />}
            theme={houseLightTheme}
            darkTheme={houseDarkTheme}
        >
            <CustomRoutes noLayout>
                <Route
                    path={SetPasswordPage.path}
                    element={<SetPasswordPage />}
                />
                <Route
                    path={ForgotPasswordPage.path}
                    element={<ForgotPasswordPage />}
                />
            </CustomRoutes>
            <Resource name="videos" list={VideoList} />
            <Resource name="channels" list={ChannelList} recordRepresentation="title" />
        </Admin>
    </BrowserRouter>
);
