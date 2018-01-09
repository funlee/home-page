/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-22 11:20:42 
 * @Last Modified time:   2017-12-22 11:20:42 
 * @Description: init-entry 
 */
import $ from 'jquery'
import './js/iconfont'
import './style/common.less'
import './style/app.less'

const playTitle = require('play-title')

import home from './hbs/home.hbs'

window.onload = function() {
  playTitle()
  $('body').append(home())
  setTimeout(() => {
    $('.layer').remove()
  }, 500);
}