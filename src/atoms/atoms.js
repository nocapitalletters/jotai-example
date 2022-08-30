import { atom } from 'jotai'

export const newGameNameAtomConfig = atom('name of the game');

export const gamesAtomConfig = atom([
    atom({
      name: 'first game',
      selected: false
    }),
    atom({
      name: 'second game',
      selected: false
    }),
    atom({
      name: 'third game',
      selected: false
    }),
    atom({
      name: 'forth game',
      selected: false
    }),
    atom({
      name: 'fifth game',
      selected: false
    }),
    atom({
      name: 'sixth game',
      selected: false
    }),
    atom({
      name: 'seventh game',
      selected: false
    }),
    atom({
      name: 'eight game',
      selected: false
    })
  ]);