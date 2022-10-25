import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceComponent } from './sentence.component';

const routes: Routes = [
	{
		path: 'sentence',
		component: SentenceComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SentenceRoutingModule {}
