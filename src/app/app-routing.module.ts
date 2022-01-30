import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CoachComponent } from './modules/terapias/coach/coach.component';
import { BioalinhamentoComponent } from './modules/terapias/bioalinhamento/bioalinhamento.component';
import { ConstelacaoComponent } from './modules/terapias/constelacao/constelacao.component';
import { MentoriaComponent } from './modules/terapias/mentoria/mentoria.component';
import { ReikiComponent } from './modules/terapias/reiki/reiki.component';
import { EscapulariosComponent } from './modules/artesanatos/escapularios/escapularios.component';
import { JapamalasComponent } from './modules/artesanatos/japamalas/japamalas.component';
import { PingentesComponent } from './modules/artesanatos/pingentes/pingentes.component';
import { AboutmeComponent } from './modules/aboutme/aboutme.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path:'',
    component: HomeComponent,
  },{
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'terapias/coach',
    component: CoachComponent,
  },
  {
    path: 'terapias/bioalinhamento',
    component: BioalinhamentoComponent,
  },
  {
    path: 'terapias/constelacao',
    component: ConstelacaoComponent,
  },
  {
    path: 'terapias/mentoria',
    component: MentoriaComponent,
  },
  {
    path: 'terapias/reiki',
    component: ReikiComponent,
  },
  {
    path: 'artesanatos/escapularios',
    component: EscapulariosComponent,
  },
  {
    path: 'artesanatos/japamalas',
    component: JapamalasComponent,
  },
  {
    path: 'artesanatos/pingentes',
    component: PingentesComponent,
  },
  {
    path: 'sobremim',
    component: AboutmeComponent,
  },
  {
    path: 'contato',
    component: ContactComponent,
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
