(function (_0x36b9dc, _0x43c019) { const _0x15585e = _0x39e0, _0x1da1d4 = _0x36b9dc(); while (!![]) { try { const _0x393f6f = parseInt(_0x15585e(0x176)) / 0x1 * (-parseInt(_0x15585e(0x17f)) / 0x2) + -parseInt(_0x15585e(0x16c)) / 0x3 + -parseInt(_0x15585e(0x16b)) / 0x4 + parseInt(_0x15585e(0x168)) / 0x5 + -parseInt(_0x15585e(0x17e)) / 0x6 * (-parseInt(_0x15585e(0x170)) / 0x7) + parseInt(_0x15585e(0x178)) / 0x8 + parseInt(_0x15585e(0x174)) / 0x9 * (parseInt(_0x15585e(0x16e)) / 0xa); if (_0x393f6f === _0x43c019) break; else _0x1da1d4['push'](_0x1da1d4['shift']()); } catch (_0x380f1f) { _0x1da1d4['push'](_0x1da1d4['shift']()); } } }(_0x56e0, 0xefa7a)); import _0x139667 from 'jsonwebtoken'; import _0x25289b from '../database/dbpromise.js'; function removeProtocol(_0x3d5433) { const _0x570328 = _0x39e0, _0x10168a = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/i, _0x51dac8 = _0x10168a['exec'](_0x3d5433); if (_0x51dac8 && _0x51dac8[_0x570328(0x173)] >= 0x2) return _0x51dac8[0x1]; return _0x3d5433; } const validateUser = async (_0x30f441, _0x585d2c, _0x4ec490) => { const _0x3a2b42 = _0x39e0; try { const _0x29f385 = _0x30f441['get'](_0x3a2b42(0x175)); if (!_0x29f385) return _0x585d2c['json']({ 'msg': 'No\x20token\x20found', 'token': _0x29f385, 'logout': !![] }); _0x139667[_0x3a2b42(0x169)](_0x29f385['split']('\x20')[0x1], process['env'][_0x3a2b42(0x17c)], async (_0x2eac16, _0x2ed769) => { const _0x53dd47 = _0x3a2b42; if (_0x2eac16) return _0x585d2c['json']({ 'success': 0x0, 'msg': _0x53dd47(0x16d), 'token': _0x29f385, 'logout': !![] }); else { const _0x1a1821 = await _0x25289b(_0x53dd47(0x17a), [_0x2ed769[_0x53dd47(0x17d)], _0x2ed769[_0x53dd47(0x179)]]); if (_0x1a1821['length'] < 0x1) return _0x585d2c[_0x53dd47(0x177)]({ 'success': ![], 'msg': _0x53dd47(0x16d), 'token': _0x29f385, 'logout': !![] }); if (_0x1a1821[0x0]['role'] === _0x53dd47(0x16a)) _0x30f441[_0x53dd47(0x16f)] = _0x2ed769, _0x4ec490(); else return _0x585d2c[_0x53dd47(0x177)]({ 'success': 0x0, 'msg': _0x53dd47(0x172), 'token': _0x29f385, 'logout': !![] }); } }); } catch (_0x45db6e) { console[_0x3a2b42(0x17b)](_0x45db6e), _0x585d2c['json']({ 'msg': _0x3a2b42(0x171), 'err': _0x45db6e }); } }; function _0x56e0() { const _0x23644b = ['log', 'JWTKEY', 'email', '7545420fAtLTM', '85418akvQJk', '4363060KUqXOQ', 'verify', 'user', '4276780JNEASX', '5615256VLyaCm', 'Invalid\x20token\x20found', '610YPMvax', 'decode', '7SZGFNM', 'server\x20error', 'Unauthorized\x20token', 'length', '445518WGlgxD', 'Authorization', '29NLBOug', 'json', '90640MeaEtU', 'password', 'SELECT\x20*\x20FROM\x20user\x20WHERE\x20email\x20=\x20?\x20and\x20password\x20=\x20?\x20']; _0x56e0 = function () { return _0x23644b; }; return _0x56e0(); } function _0x39e0(_0x413e40, _0x178512) { const _0x56e068 = _0x56e0(); return _0x39e0 = function (_0x39e04f, _0x18b833) { _0x39e04f = _0x39e04f - 0x168; let _0x4ecadf = _0x56e068[_0x39e04f]; return _0x4ecadf; }, _0x39e0(_0x413e40, _0x178512); } export default validateUser;