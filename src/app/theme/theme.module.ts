import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu';
import { PostComponent } from './components/post';
import { MdCardModule, MdButtonModule, MdIconModule, MdInputModule, MdDialogModule } from "@angular/material";
import { NavPostsComponent } from './components/nav-posts/nav-posts.component';
import { SubredditsComponent } from './components/subreddits/subreddits.component';
import { MalihuScrollbarModule } from "ngx-malihu-scrollbar";
import { TooltipComponent } from "app/theme/components/menu/menu.component";

const components = [
    MenuComponent,
    PostComponent,
    NavPostsComponent,
    SubredditsComponent,
    TooltipComponent
]

@NgModule({
    imports: [
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule,
        MdDialogModule,
        MalihuScrollbarModule.forRoot(),
    ],
    exports: [...components, MdInputModule, MdIconModule],
    declarations: [...components],
     entryComponents: [
        TooltipComponent
    ],
    providers: [],
})
export class ThemeModule { }
