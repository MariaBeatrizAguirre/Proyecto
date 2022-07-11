import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculosComponent } from './components/circulos/circulos.component';
import { EnsayosComponent } from './components/ensayos/ensayos.component';
import { TerminoComponent } from './components/termino/termino.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    RedesComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    CirculosComponent,
    EnsayosComponent,
    TerminoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
      NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
