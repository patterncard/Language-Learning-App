import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureComponent } from './picture.component';

const routes: Routes = [
	{
		path: 'picture',
		component: PictureComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PictureRoutingModule {}
