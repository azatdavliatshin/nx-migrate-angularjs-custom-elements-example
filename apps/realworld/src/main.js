import { initLibrary } from '../../../dist/libs/angular-components';

initLibrary()
  .then(() => import('./app/app.js'))
  .catch((error) => {
    console.error(error);
  });
