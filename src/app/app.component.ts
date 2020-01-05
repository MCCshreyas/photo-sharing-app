import { Component, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fpa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  navBarOpen = true;

  routes = [
    {
      route: '/',
      title: 'Home',
      icon: 'home'
    },
    {
      route: '/albums',
      title: 'Album',
      icon: 'folder'
    }
  ];

  watcher: Subscription;

  constructor(media: MediaObserver) {
    this.watcher = media.asObservable().subscribe((change: MediaChange) => {
      console.log(change);
      if (change.mqAlias === 'xs') {
        this.loadMobileView();
      }
      else {
        this.loadNormalView();
      }
    });
  }

  ngOnDestroy() { 
    this.watcher.unsubscribe();
  }

  loadMobileView() {
    console.log('mob');
    this.navBarOpen = false;
  }

  loadNormalView() {
    console.log('nor');
    this.navBarOpen = true;
  }

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }
}
