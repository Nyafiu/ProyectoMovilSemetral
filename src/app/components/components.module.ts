import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FabMenuComponent } from "./fab-menu/fab-menu.component";

@NgModule({
    declarations:[
        FabMenuComponent
    ],
    imports:[
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports:[
        FabMenuComponent
    ]
})

export class ComponentsModule{}