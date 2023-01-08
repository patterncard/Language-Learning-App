import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighscoreComponent } from './highscore.component';

const routes: Routes = [
	{
		path: 'highscore',
		component: HighscoreComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HighscoreRoutingModule {}
