import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsCoinsComponent } from './congrats-coins.component';
import { CongratsCoinsModule } from './congrats-coins.module';

const routes: Routes = [
	{
		path: 'congrats-coins',
		component: CongratsCoinsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CongratsCoinsRoutingModule {}
