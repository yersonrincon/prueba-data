import { Component, OnInit } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-vista-home',
  templateUrl: './vista-home.component.html',
  styleUrls: ['./vista-home.component.css']
})
export class VistaHomeComponent implements OnInit {

  constructor(private informacion:InformacionService) { }

  datoInformacion :any []=[];
  totalTracks : any []=[];

getData(){
  this.informacion.getInformacion()
  .subscribe((data:any)=>{
    console.log(data);

    this.datoInformacion= data;
    this.totalTracks  =  this.datoInformacion.filter(data=>data.total_tracks>=17 && data.name=="SR. SANTOS" );
    console.log('bdhff',this.totalTracks)
  

  });

}

  ngOnInit(): void {
  this.getData();
  }


}
