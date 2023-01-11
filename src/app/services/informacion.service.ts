import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from  'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor( private httpcliente :HttpClient) { }

  getInformacion(){
  return this.httpcliente.get('assets/data/informacion.json').pipe(map((data:any)=>data.albums.items));

  }
  transform( value: string ): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.httpcliente.get( url + value );
  }



}
