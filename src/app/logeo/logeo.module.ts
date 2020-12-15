import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LogeoPageRoutingModule } from './logeo-routing.module';

import { LogeoPage } from './logeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogeoPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: LogeoPage
      }
    ])
  ],
  declarations: [LogeoPage]
})
export class LogeoPageModule {}
