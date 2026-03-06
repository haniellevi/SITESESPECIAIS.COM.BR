// @ts-nocheck
import * as migration_20260303_140909_init_db from './20260303_140909_init_db';

export const migrations = [
  {
    up: migration_20260303_140909_init_db.up,
    down: migration_20260303_140909_init_db.down,
    name: '20260303_140909_init_db'
  },
];

