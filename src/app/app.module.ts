import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-rounting.module';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';


registerLocaleData(localePt, 'pt') // registra a localização que queremos trabalhar

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ 
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide:DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
