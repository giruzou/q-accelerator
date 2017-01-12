import Util from '../common/util';
import MuteAlreadyReadArticleContent from './popular-items/mute-already-read-article-content.js';
import MuteUserArticleContent from './popular-items/mute-user-article-content.js';
import ShowAlreadyReadButtonContent from './popular-items/show-already-read-button-content.js';

Util.getSettings(settings => {

  try {
    if (settings['mute-already-read-article']) {
      new MuteAlreadyReadArticleContent().run();
    }
  } catch (e) {
    Util.errorLog(e);
  }

  try {
    if (settings['mute-already-read-article-show-button']) {
      new ShowAlreadyReadButtonContent().run(settings['save-history']);
    }
  } catch (e) {
    Util.errorLog(e);
  }

  try {
    if (settings['mute-users'] && settings['mute-user-article']) {
      new MuteUserArticleContent().run(settings['mute-users']);
    }
  } catch (e) {
    Util.errorLog(e);
  }

});
