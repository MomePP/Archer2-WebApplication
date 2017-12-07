import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BlocklyComponent } from './dashboard-layout/blockly/blockly.component';
import { DashboardComponent }   from './dashboard-layout/dashboard/dashboard.component';
import { UserComponent }   from './dashboard-layout/user/user.component';
import { TableComponent }   from './dashboard-layout/table/table.component';
import { TypographyComponent }   from './dashboard-layout/typography/typography.component';
import { IconsComponent }   from './dashboard-layout/icons/icons.component';
import { MapsComponent }   from './dashboard-layout/maps/maps.component';
import { NotificationsComponent }   from './dashboard-layout/notifications/notifications.component';
import { UpgradeComponent }   from './dashboard-layout/upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBgpWpnKhifv0wFRuVfrk9QsNtoU8o_1Wk",
  authDomain: "loginwhitearrow.firebaseapp.com",
  databaseURL: "https://loginwhitearrow.firebaseio.com",
  projectId: "loginwhitearrow",
  storageBucket: "loginwhitearrow.appspot.com",
  messagingSenderId: "60503162759"
};

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    DashboardLayoutComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  schemas: [
    NO_ERRORS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };

