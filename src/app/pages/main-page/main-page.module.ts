import { ThemeModule } from '../../theme/theme.module';
import { MainPageRoutingModule, routedComponents } from './main-page.routing';
import { NgModule } from '@angular/core';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
@NgModule({
    imports: [
        MainPageRoutingModule,
        ThemeModule,
        MalihuScrollbarModule.forRoot(),
    ],
    exports: [],
    declarations: [...routedComponents],
    providers: [],
})
export class MainPageModule { }
