import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:Producto[]=[
    {idproducto:1,nombre:"leche",precio:3.2,cantidad:81},
    {idproducto:2,nombre:"arroz",precio:4.1,cantidad:73},
    {idproducto:3,nombre:"atun",precio:3.4,cantidad:40},
    {idproducto:4,nombre:"lenteja",precio:5.2,cantidad:60},
    {idproducto:5,nombre:"aceite",precio:5.5,cantidad:42},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
