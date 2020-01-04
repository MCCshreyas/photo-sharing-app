import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent],
  exports: [ToolbarComponent, MarginIconComponent]
})
export class SharedModule { }