import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogeoPage } from './logeo.page';

const routes: Routes = [
  {
    path: '',
    component: LogeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogeoPageRoutingModule {}
