import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
//import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { SettingComponent } from './admin/setting/setting.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children:
            [{
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'setting',
                component: SettingComponent
            },
            {
                path: '**',
                component: SettingComponent
            }]
    },
    {
        path: '**',
        component: LoginComponent
    }
];
