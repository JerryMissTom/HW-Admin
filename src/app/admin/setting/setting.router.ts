import { SettingComponent } from './setting.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AuthManageComponent } from './auth-manage/auth-manage.component';


export const settingRoutes = [
    {
        path: '',
        component: SettingComponent,
        children: [
            {
                path: '',
                redirectTo: 'basic-info',
                pathMatch: 'full'
            },
            {
                path: 'basic-info',
                component: BasicInfoComponent
            },
            {
                path: 'auth-manage',
                component: AuthManageComponent
            },
            {
                path: '**',
                component: BasicInfoComponent
            }]
    }
];
