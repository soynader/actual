function _0x249f() { const _0x4f8ab2 = ['845135KSAYjh', '45SZGCJC', '2ebObij', 'Failed\x20to\x20load\x20messages.', 'params', '224831itAeCi', '1879556oSvcmS', '960234zeKMQA', 'query', 'true', 'fetchMessagesFromWA', '1736600BROOBG', 'before', 'sessionId', '180915OyCwve', '3316376uaAMJL', 'isLegacy']; _0x249f = function () { return _0x4f8ab2; }; return _0x249f(); } (function (_0x47a732, _0x17aa0a) { const _0x55ec50 = _0x3bb4, _0x3e9f30 = _0x47a732(); while (!![]) { try { const _0x44f7fc = parseInt(_0x55ec50(0x1b4)) / 0x1 * (parseInt(_0x55ec50(0x1b1)) / 0x2) + -parseInt(_0x55ec50(0x1ac)) / 0x3 + -parseInt(_0x55ec50(0x1b5)) / 0x4 + parseInt(_0x55ec50(0x1af)) / 0x5 + -parseInt(_0x55ec50(0x1b6)) / 0x6 + -parseInt(_0x55ec50(0x1ad)) / 0x7 + parseInt(_0x55ec50(0x1ba)) / 0x8 * (parseInt(_0x55ec50(0x1b0)) / 0x9); if (_0x44f7fc === _0x17aa0a) break; else _0x3e9f30['push'](_0x3e9f30['shift']()); } catch (_0x23a997) { _0x3e9f30['push'](_0x3e9f30['shift']()); } } }(_0x249f, 0x4cf60)); import { getSession } from '../whatsapp.js'; import _0x1764e0 from './../response.js'; function _0x3bb4(_0x4f51aa, _0x5cf136) { const _0x249f67 = _0x249f(); return _0x3bb4 = function (_0x3bb491, _0x3559f3) { _0x3bb491 = _0x3bb491 - 0x1ac; let _0x51630b = _0x249f67[_0x3bb491]; return _0x51630b; }, _0x3bb4(_0x4f51aa, _0x5cf136); } const getMessages = async (_0x23aeb2, _0x8c8d71) => { const _0xc15645 = _0x3bb4, _0x1542c8 = getSession(_0x8c8d71['locals'][_0xc15645(0x1bc)]), { jid: _0x53073a } = _0x23aeb2[_0xc15645(0x1b3)], { limit: limit = 0x19, cursor_id: cursor_id = null, cursor_fromMe: cursor_fromMe = null } = _0x23aeb2[_0xc15645(0x1b7)], _0x5595c1 = {}; cursor_id && (_0x5595c1[_0xc15645(0x1bb)] = { 'id': cursor_id, 'fromMe': Boolean(cursor_fromMe && cursor_fromMe === _0xc15645(0x1b8)) }); try { let _0x3d922a; const _0x16eb21 = 'before' in _0x5595c1 ? _0x5595c1 : null; _0x1542c8[_0xc15645(0x1ae)] ? _0x3d922a = await _0x1542c8[_0xc15645(0x1b9)](_0x53073a, limit, _0x16eb21) : _0x3d922a = await _0x1542c8['store']['loadMessages'](_0x53073a, limit, _0x16eb21), _0x1764e0(_0x8c8d71, 0xc8, !![], '', _0x3d922a); } catch { _0x1764e0(_0x8c8d71, 0x1f4, ![], _0xc15645(0x1b2)); } }; export default getMessages;