import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signature-auth',
  templateUrl: './signature-auth.component.html',
  styleUrl: './signature-auth.component.scss'
})
export class SignatureAuthComponent {
  @ViewChild('canvasRef', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  isDrawing = false;
  prevPoint: { x: number; y: number } | null = null;

  startDrawing(event: MouseEvent | TouchEvent): void {
    this.isDrawing = true;
    this.prevPoint = this.getPoint(event);
  }

  stopDrawing(): void {
    this.isDrawing = false;
    this.prevPoint = null;
  }

  draw(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentPoint = this.getPoint(event);
    if (!currentPoint) return;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    if (this.prevPoint) {
      ctx.moveTo(this.prevPoint.x, this.prevPoint.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);
      ctx.stroke();
    }

    this.prevPoint = currentPoint;
  }

  getPoint(event: MouseEvent | TouchEvent): { x: number; y: number } | null {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in event) {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    return { x, y };
  }

  clearCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// constructor(
//   public ref: DynamicDialogRef,
//   private concernsService: ConcernsService
// ) {
//   this.onCloseSubscription = this.ref.onClose.subscribe(() => {
//   });
// }

// ngOnInit() {
//   this.concernsService.concerns$.subscribe((concerns: any) => {
//     if (concerns && typeof concerns === 'object') {
//       debugger
//       // Extract inspections if available, otherwise default to an empty array
//       this.concerns = concerns.inspections ? concerns.inspections : [];
//       console.log(this.concerns); // Add this to inspect the structure

//       // Handle the case where inspections property is missing
//       if (!this.concerns.length) {
//         console.warn('No inspections found for this concern.');
//       }
//       if (concerns.inspectionItemsNotLinked) {
//         console.log('Inspection items not linked to any concern:', concerns.inspectionItemsNotLinked);
//       }
//     } else {
//       console.error('Expected concerns to be an object, received:', concerns);
//       this.concerns = [];
//     }
//   });
// }



// ngOnDestroy() {
//   if (this.onCloseSubscription) {
//     this.onCloseSubscription.unsubscribe();
//   }
// }



}