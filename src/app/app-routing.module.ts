import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact-page', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'form', component: FormComponent },
  { path: 'contact-page', component: ContactPageComponent },
   {path: '**', component: ContactPageComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
