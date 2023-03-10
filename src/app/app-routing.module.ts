import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PreviewComponent } from './component/preview/preview.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { TemplateComponent } from './component/template/template.component';
import { LayoutComponent } from './shared/component/layout/layout.component';
import { LoginComponent } from './shared/component/login/login.component';

const routes: Routes = [
  {
    path:'login',
  component:LoginComponent,
 },
  {
    path:'',
    component: LayoutComponent,


    children: [
      {
      path:'',
      component: DashboardComponent,

    },
    {
      path:'preview',
      component:PreviewComponent

    },
    {
      path:'template',
      component:TemplateComponent
    },

    {
      path:'templateForm',
      component:TemplateFormComponent
    },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
