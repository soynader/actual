(function (_0x5c3b8c, _0x5d964d) { const _0x25f992 = _0x35e7, _0x4c1866 = _0x5c3b8c(); while (!![]) { try { const _0x4684fb = parseInt(_0x25f992(0x184)) / 0x1 + -parseInt(_0x25f992(0x183)) / 0x2 + parseInt(_0x25f992(0x17f)) / 0x3 + parseInt(_0x25f992(0x188)) / 0x4 + parseInt(_0x25f992(0x186)) / 0x5 * (-parseInt(_0x25f992(0x187)) / 0x6) + -parseInt(_0x25f992(0x182)) / 0x7 * (-parseInt(_0x25f992(0x185)) / 0x8) + parseInt(_0x25f992(0x180)) / 0x9; if (_0x4684fb === _0x5d964d) break; else _0x4c1866['push'](_0x4c1866['shift']()); } catch (_0x19954c) { _0x4c1866['push'](_0x4c1866['shift']()); } } }(_0x34da, 0x26902)); import { isSessionExists } from '../whatsapp.js'; import _0x35bf77 from './../response.js'; function _0x34da() { const _0x43a5db = ['locals', 'Session\x20not\x20found.', 'params', '275796xqkzoh', '2532456gQLGMl', 'query', '49gmZYLg', '442336FyzQze', '35544GPTNGM', '97832dMHWQa', '4640WFhOqg', '1476ZZCepp', '451788jdDmqD', 'DELETE\x20FROM\x20instance\x20WHERE\x20client_id\x20=\x20?']; _0x34da = function () { return _0x43a5db; }; return _0x34da(); } import _0x2d5c0c from '../database/dbpromise.js'; function _0x35e7(_0x5b0045, _0xe5d2b7) { const _0x34dad5 = _0x34da(); return _0x35e7 = function (_0x35e7ab, _0x321787) { _0x35e7ab = _0x35e7ab - 0x17c; let _0x40cb35 = _0x34dad5[_0x35e7ab]; return _0x40cb35; }, _0x35e7(_0x5b0045, _0xe5d2b7); } const validate = async (_0x3524e3, _0x2b2b4b, _0x188db0) => { const _0x291a18 = _0x35e7, _0x47285f = _0x3524e3[_0x291a18(0x181)]['id'] ?? _0x3524e3[_0x291a18(0x17e)]['id']; if (!isSessionExists(_0x47285f)) return await _0x2d5c0c(_0x291a18(0x189), [_0x47285f]), _0x35bf77(_0x2b2b4b, 0x194, ![], _0x291a18(0x17d)); _0x2b2b4b[_0x291a18(0x17c)]['sessionId'] = _0x47285f, _0x188db0(); }; export default validate;