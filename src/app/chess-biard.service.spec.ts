import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChessBoardService {

  // BehaviorSubject to track the state of the chessboard as a FEN string (or other format)
  public chessBoardState$ = new BehaviorSubject<string>(""); // Initial value can be an empty string or starting FEN position

  constructor() { }

  // Method to update the chessboard state, can be called from the component
  updateChessBoardState(newBoardState: string): void {
    this.chessBoardState$.next(newBoardState);  // Emit the new state
  }
}

