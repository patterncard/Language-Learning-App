import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsLevelComponent } from './congrats-level.component';

const routes: Routes = [
	{
		path: 'congrats-level',
		component: CongratsLevelComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CongratsLevelRoutingModule {}
