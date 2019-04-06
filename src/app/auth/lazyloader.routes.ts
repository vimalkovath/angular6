import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
        { path: 'blogs', loadChildren: '../pages/blogs/blogs.module#BlogsModule' },
        { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
    ]
}];
