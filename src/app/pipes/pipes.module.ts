import { NgModule } from '@angular/core';
import { RemoveCommaPipe } from './remove-comma.pipe';



@NgModule( {
    declarations: [
        RemoveCommaPipe
    ],
    exports: [
        RemoveCommaPipe
    ],
    imports: []
} )
export class PipesModule { }