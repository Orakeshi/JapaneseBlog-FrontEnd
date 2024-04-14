import * as hiraganaToggle from './components/toggle.js'
import * as katakanaToggle from './components/toggle.js'

let toggleHiraganaElement = document.getElementById('hiragana-box');
let hiraganaElment = document.getElementById('hiragana-chart')

let toggleKatakanaElement = document.getElementById('katakana-box');
let katakanaElement = document.getElementById('katakana-chart')


hiraganaToggle.showElement(toggleHiraganaElement, hiraganaElment);
katakanaToggle.showElement(toggleKatakanaElement, katakanaElement);
