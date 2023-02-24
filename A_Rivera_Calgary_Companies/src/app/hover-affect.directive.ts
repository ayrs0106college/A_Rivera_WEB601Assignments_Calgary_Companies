import { Directive, ElementRef, Renderer2, OnInit,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  constructor(
    private elementRef:ElementRef, 
    private renderer:Renderer2) { }
   
    ngOnInit(){
      this.color = this.defaultColor;
    }

    @Input()
  defaultColor!: string;
    @Input() highlight: string= 'white';

    @HostBinding('style.color') color:string = this.defaultColor;

    @HostListener('mouseenter') mouseover(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', '700');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', 'rgba(203, 11, 11, 1)');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-width', '1px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-style', 'solid');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '12px');
      this.color=this.highlight;
    }

    @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', '400');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-width', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-style', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', 'none');
      this.color=this.defaultColor;
    }

}

@Directive({
  selector: '[typeHoverAffect]',
})
export class typeHoverAffectDirective {
  constructor(
    private elementRef:ElementRef, 
    private renderer:Renderer2) { }
   
    ngOnInit(){
      this.color = this.defaultColor;
    }

    @Input()
  defaultColor!: string;
    @Input() highlight: string= 'white';

    @HostBinding('style.color') color:string = this.defaultColor;

    @HostListener('mouseenter') mouseover(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', 'rgba(70, 70, 70, 1)');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-width', '1px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-style', 'solid');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '7px');
      this.color=this.highlight;
    }

    @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-width', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-style', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', 'none');
      this.color=this.defaultColor;
    }

}