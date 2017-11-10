import { Routes } from '@angular/router';

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

export const AppRoutes: Routes = [
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
        path: ':user',
        component: DashboardLayoutComponent,
        children: [
            { 
                path: '', 
                redirectTo: 'blockly', 
                pathMatch: 'full' 
            },
            {
                path: 'blockly',
                component: BlocklyComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'table',
                component: TableComponent
            },
            {
                path: 'typography',
                component: TypographyComponent
            },
            {
                path: 'icons',
                component: IconsComponent
            },
            {
                path: 'maps',
                component: MapsComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'upgrade',
                component: UpgradeComponent
            }
        ]
    }
]
