import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AlbumsModule } from './albums/albums.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AlbumsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
