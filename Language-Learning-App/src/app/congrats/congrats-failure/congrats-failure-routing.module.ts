import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsFailureComponent } from './congrats-failure.component';

const routes: Routes = [
	{
		path: 'congrats-failure',
		component: CongratsFailureComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CongratsFailureRoutingModule {}
