import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu';
import { PostComponent } from './components/post';
import { MdCardModule, MdButtonModule, MdIconModule, MdInputModule } from "@angular/material";
import { SearchDirective } from './directives/search.directive';

const components = [
    MenuComponent,
    PostComponent
]

@NgModule({
    imports: [
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule
    ],
    exports: [...components, MdInputModule, MdIconModule],
    declarations: [...components, SearchDirective],
    providers: [],
})
export class ThemeModule { }
