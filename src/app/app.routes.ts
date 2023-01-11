
import { Routes } from "@angular/router";
import { VistaArtistaComponent } from "./component/vista-artista/vista-artista.component";
import { VistaHomeComponent } from "./component/vista-home/vista-home.component";

export const ROUTES :Routes =[

    {path:'vista-home',component:VistaHomeComponent},
    {path:'vista-artista',component:VistaArtistaComponent},
    {path:'',pathMatch:'full',redirectTo:'vista-home'},
    {path:'**',pathMatch:'full',redirectTo:'vista-home'}
]
