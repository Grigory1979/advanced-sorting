import orderByProps from './sorting';

const objUser = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

orderByProps(objUser, ['name', 'level']);
orderByProps(objUser);