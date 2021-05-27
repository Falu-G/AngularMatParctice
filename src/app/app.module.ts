import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {  MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule } from "@angular/material/card";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import { MatBadgeModule} from "@angular/material/badge"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { FormsModule} from "@angular/forms"
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CacheInterceptor } from './service/cache-interceptor';
import { HistoryComponent } from './history/history.component';
import { MatGridListModule } from "@angular/material/grid-list"
import { MatInputModule } from "@angular/material/input"
// import {MatButtonModule, MatIconModule} from "@angular/material"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CreateQrComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
