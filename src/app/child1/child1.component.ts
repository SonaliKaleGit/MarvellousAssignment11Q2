import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers:[NumberService]
})


export class Child1Component 
{

  public No:number=11;
  public No2:number=12;
  public Result:string;
  public Result1:string;

  constructor(private obj:NumberService)
  {
    this.Result=this.obj.ChkPrime(this.No);
    this.Result1=this.obj.ChkPrime(this.No2);
  }
}
