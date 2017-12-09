import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AuthManageComponent } from './auth-manage/auth-manage.component';
import { SettingComponent } from './setting.component';
import { RouterModule } from '@angular/router';
import { settingRoutes } from './setting.router';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoutes)
  ],
  declarations: [BasicInfoComponent, AuthManageComponent, SettingComponent],
  providers: [AuthGuard]
})
export class SettingModule { }
