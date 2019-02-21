import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { LibroDetailComponent } from './libro-detail/libro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibroDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
