import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export const CounterStore = signalStore(
  withState(initialState),
  withComputed(({count}) => ({
    doubleCount: computed(() => count() * 2)
  })),
  withMethods(store => ({
    incrementCount(): void {
      patchState(store, state => ({
        count: state.count + 1
      }))
    }
  }))
);


class CounterStoreWithSubject {
  private readonly countSubject = new BehaviorSubject(0);

  public readonly count$ = this.countSubject.asObservable();
  public readonly doubleCount$ = this.countSubject.asObservable().pipe(map(x => x * 2));

  public increment(): void {
    this.countSubject.next(this.countSubject.value + 1);
  }
}
