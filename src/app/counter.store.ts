import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed} from '@angular/core';

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
