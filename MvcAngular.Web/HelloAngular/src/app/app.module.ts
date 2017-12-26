import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule, RadioButtonModule, ButtonModule, PanelModule, InputTextModule, TooltipModule, MessageModule, MessagesModule } from 'primeng/primeng';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      CheckboxModule,
      RadioButtonModule,
      ButtonModule,
      PanelModule,
      InputTextModule,
      TooltipModule,
      MessageModule,
      MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
