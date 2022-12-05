import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsPointsComponent } from './congrats-points.component';

const routes: Routes = [
	{
		path: 'congrats-points',
		component: CongratsPointsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CongratsPointsRoutingModule {}
