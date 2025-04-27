import { Component, inject } from '@angular/core';
import { InstructionService, Instruction } from '../../services/instructions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private instructionService = inject(InstructionService);

  instructions: Instruction[] = [];

  ngOnInit(): void {
    this.instructionService.getInstructions().subscribe({
      next: (data) => {
        this.instructions = data;
      },
      error: (err) => console.error('Error fetching instructions:', err)
    });
  }
}