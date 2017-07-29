import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu';
import { PostComponent } from './components/post';
import { MdCardModule, MdButtonModule, MdIconModule } from "@angular/material";

const components = [
    MenuComponent,
    PostComponent
]

@NgModule({
    imports: [
        MdCardModule,
        MdButtonModule,
        MdIconModule
    ],
    exports: [...components],
    declarations: [...components],
    providers: [],
})
export class ThemeModule { }
