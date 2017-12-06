import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ButtonComponent } from './admin/dashboard/button/button.component';
import { EchartsComponent } from './admin/dashboard/echarts/echarts.component';
import { SelectivePreloadingStrategy } from './shared/router-config/preloading-strategy';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SettingComponent,
    UserComponent,
    ButtonComponent,
    EchartsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategy })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
