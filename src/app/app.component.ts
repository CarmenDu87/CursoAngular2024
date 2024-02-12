import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MiprimerProyecto';
  public ArregloTarjetas: Tarjeta[]=[]

  ngOnInit(): void {

    this.ArregloTarjetas = [
      {titulo:'video 1', subtitulo: 'Subtitulo Video1'},
      {titulo:'video 2', subtitulo: 'Subtitulo Video2'},
      {titulo:'Video 3', subtitulo: 'Subtitulo Video3'},
    ]
  }

}
