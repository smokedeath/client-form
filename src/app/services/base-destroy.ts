import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BaseDestroy implements OnDestroy {

  private destroy$ = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public unsubscribeOnDestroy = <T>(source: Observable<T>): Observable<T> => {
    return source.pipe(
      takeUntil(this.destroy$)
    );
  }
}
