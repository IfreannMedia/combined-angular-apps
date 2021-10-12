import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstAppSharedModule} from '../../projects/first-app/src/app/app.module';
import {SecondAppSharedModule} from '../../projects/second-app/src/app/app.module';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: '../../projects/first-app/src/app/app.module#FirstAppSharedModule'
  },
  {
    path: 'app2',
    loadChildren: '../../projects/second-app/src/app/app.module#SecondAppSharedModule'
  },
  {path: '**', redirectTo: '/app1/one'}// or ** ?
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FirstAppSharedModule.forRoot(),
    SecondAppSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
