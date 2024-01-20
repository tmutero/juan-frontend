import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitComponent } from './pages/visit/visit.component';
import { BeverageComponent } from './pages/beverage/beverage.component';
import { BarComponent } from './pages/bar/bar.component';
import { ViewBarComponent } from './pages/bar/view-bar/view-bar.component';

const routes: Routes = [
  { path: '', redirectTo: 'visit', pathMatch: 'full' },
  {
    path: 'visit',
    component: VisitComponent,
  },

  {
    path: 'beverage',
    component: BeverageComponent,
  },


  {
    path: 'bar',
    component: BarComponent,
  },
  
  {
    path: 'view-bar',
    component: ViewBarComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
