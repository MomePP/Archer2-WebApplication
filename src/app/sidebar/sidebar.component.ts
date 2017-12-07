import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'blockly', title: 'Blockly',  icon: 'ti-thought', class: '' },
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    authState: any = null;
    Users: Observable<any[]>;

    constructor(private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router) {
    
        this.afAuth.authState.subscribe((auth) => {
          this.authState = auth
          this.router.navigate(['/' + this.authState.uid]);
        });
      }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
    signOut(): void {
        console.log('signout');
        this.afAuth.auth.signOut();
        this.router.navigate(['/'])
      }

}
