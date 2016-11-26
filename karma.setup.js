import angular from 'angular';
import mocks from 'angular-mocks';

import * as main from './app/index';

//make sure you have your directory and regex test set correctly!
let context = require.context('./app', true, /test\.js$/);
context.keys().forEach(context);
