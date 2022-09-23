import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations:[
        MenuComponent,
        HeaderComponent
    ],
    imports:[
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports:[
        MenuComponent,
        HeaderComponent
    ]
})

export class ComponentsModule{}