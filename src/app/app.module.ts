import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitComponent } from './pages/visit/visit.component';
import { BarComponent } from './pages/bar/bar.component';
import { BeverageComponent } from './pages/beverage/beverage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './interceptors/http.interceptor';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AddBarModalComponent } from './pages/bar/add-bar-modal/add-bar-modal.component';
import { ViewBarComponent } from './pages/bar/view-bar/view-bar.component';
import { AddBeverageModalComponent } from './pages/beverage/add-beverage-modal/add-beverage-modal.component';
import { AddStockComponent } from './pages/bar/add-stock/add-stock.component';
import { AddVisitComponent } from './pages/visit/add-visit/add-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    BarComponent,
    BeverageComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    AddBarModalComponent,
    ViewBarComponent,
    AddBeverageModalComponent,
    AddStockComponent,
    AddVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
