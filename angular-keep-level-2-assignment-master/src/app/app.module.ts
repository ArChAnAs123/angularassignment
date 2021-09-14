import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule  } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { NotesService } from './services/notes.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule , Routes} from '@angular/router';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { HeaderComponent } from './header/header.component';

const route: Routes=[
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate: [CanActivateRouteGuard]},
  {path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'}
];

@NgModule({
  declarations: [ AppComponent,
  
    LoginComponent, DashboardComponent, HeaderComponent],
  imports: [ BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    
    ReactiveFormsModule,
    RouterModule.forRoot(route) 
    
  ],
  providers: [AuthenticationService, NotesService, RouterService, CanActivateRouteGuard],
  bootstrap: [AppComponent ]
})

export class AppModule { }
