import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu';
import { PostComponent } from './components/post';
import { MdCardModule, MdButtonModule, MdIconModule, MdInputModule, MdDialog } from "@angular/material";
import { NavPostsComponent } from './components/nav-posts/nav-posts.component';
import { SubreggitsComponent } from './components/subreggits/subreggits.component';
import { MalihuScrollbarModule } from "ngx-malihu-scrollbar";

const components = [
    MenuComponent,
    PostComponent,
    NavPostsComponent,
    SubreggitsComponent
]

@NgModule({
    imports: [
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule,
        MalihuScrollbarModule.forRoot(),
    ],
    exports: [...components, MdInputModule, MdIconModule],
    declarations: [...components],
    providers: [MdDialog],
})
export class ThemeModule { }
