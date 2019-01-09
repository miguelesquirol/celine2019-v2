/*
 * @title App
 * @description Application entry point
 */

import navbar from '../modules/navbar/navbar';
import carousel from '../modules/carousel/carousel';
import theme from './components/theme';


document.addEventListener('DOMContentLoaded', function() {
  navbar();
  carousel();
  theme();
})
