import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BioalinhamentoComponent } from './modules/terapias/bioalinhamento/bioalinhamento.component';
import { CoachComponent } from './modules/terapias/coach/coach.component';
import { ConstelacaoComponent } from './modules/terapias/constelacao/constelacao.component';
import { MentoriaComponent } from './modules/terapias/mentoria/mentoria.component';
import { ReikiComponent } from './modules/terapias/reiki/reiki.component';
import { JapamalasComponent } from './modules/artesanatos/japamalas/japamalas.component';
import { EscapulariosComponent } from './modules/artesanatos/escapularios/escapularios.component';
import { PingentesComponent } from './modules/artesanatos/pingentes/pingentes.component';
import { AboutmeComponent } from './modules/aboutme/aboutme.component';
import { ContactComponent } from './modules/contact/contact.component';
import {MatRadioModule} from '@angular/material/radio';







@NgModule({
  declarations: [
    AppComponent,
    BioalinhamentoComponent,
    CoachComponent,
    ConstelacaoComponent,
    MentoriaComponent,
    ReikiComponent,
    JapamalasComponent,
    EscapulariosComponent,
    PingentesComponent,
    AboutmeComponent,
    ContactComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
