import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChessBoardService {
  private apiUrl = 'http://localhost:3000/chess';  // Replace with your API URL

  constructor(private http: HttpClient) {}
  // A BehaviorSubject is useful if you want to store the latest value and emit it to new subscribers
  public chessBoardState$ = new BehaviorSubject<string>(""); // Initialize with an empty string or FEN notation

  // Create a new game
  createGame(): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, {});
  }

  // Get the current state of the board
  getBoard(gameId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/board?gameId=${gameId}`);
  }

  // Make a move
  makeMove(gameId: string, prevX: number, prevY: number, newX: number, newY: number, promotedPieceType: string | null): Observable<any> {
    return this.http.post(`${this.apiUrl}/move`, {
      gameId,
      prevX,
      prevY,
      newX,
      newY,
      promotedPieceType
    });
  }
}
