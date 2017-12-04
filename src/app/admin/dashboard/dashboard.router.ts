
import { DashboardComponent } from './dashboard.component';
import { ButtonComponent } from './button/button.component';
import { EchartsComponent } from './echarts/echarts.component';
import { Component } from '@angular/core';

export const dashboardRoutes = [
    {
        path: '',
        component: DashboardComponent,
        children:
            [
                {
                    path: '',
                    redirectTo: 'button',
                    pathMatch: 'full'
                },
                {
                    path: 'button',
                    component: ButtonComponent
                },
                {
                    path: 'echarts',
                    component: EchartsComponent
                },
                {
                    path: '**',
                    component: ButtonComponent
                }]
    }
];
