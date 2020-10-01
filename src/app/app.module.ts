import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes
import { AppRoutingModule } from './app-routing.module';
// Angular Material modules
import { AppMaterialModule } from './app-material.module';
// Components
import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
