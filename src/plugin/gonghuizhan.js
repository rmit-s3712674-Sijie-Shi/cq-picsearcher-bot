import { random } from 'lodash';
import { getProxyURL, getMaster1200 } from './pximg';
import CQcode from '../CQcode';
import { URL } from 'url';
import NamedRegExp from 'named-regexp-groups';
import '../utils/jimp.plugin';
import Jimp from 'jimp';
const Axios = require('../axiosProxy');

function sendGonghuizhan(context, replyFunc, logger, bot){
  //const setting = global.config.bot.setu;
  //const replys = global.config.bot.replys;
  //const proxy = setting.pximgProxy.trim();
  const gonghuizhanReg = new NamedRegExp(global.config.bot.regs.gonghuizhan);
  const gonghuizhanRegExec = gonghuizhanReg.exec(context.message);
  const url = global.config.bot.url
  if(gonghuizhanRegExec){
    replyFunc(context, url, true)
    return
  }
}

export default sendGonghuizhan