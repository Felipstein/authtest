import EventManager from '../libs/EventManager';

export default function toast(text, duration = 6000) {
  EventManager.emit('addtoast', { text, duration });
}
