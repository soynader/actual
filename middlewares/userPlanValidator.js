(function (_0x6506ee, _0x462666) { const _0x4276b4 = _0x21aa, _0xd47d6c = _0x6506ee(); while (!![]) { try { const _0x1f1a87 = -parseInt(_0x4276b4(0xe8)) / 0x1 * (parseInt(_0x4276b4(0xd1)) / 0x2) + parseInt(_0x4276b4(0xdb)) / 0x3 * (parseInt(_0x4276b4(0xed)) / 0x4) + -parseInt(_0x4276b4(0xec)) / 0x5 + parseInt(_0x4276b4(0xe4)) / 0x6 + -parseInt(_0x4276b4(0xd8)) / 0x7 + parseInt(_0x4276b4(0xe6)) / 0x8 * (parseInt(_0x4276b4(0xd4)) / 0x9) + parseInt(_0x4276b4(0xd7)) / 0xa * (parseInt(_0x4276b4(0xdd)) / 0xb); if (_0x1f1a87 === _0x462666) break; else _0xd47d6c['push'](_0xd47d6c['shift']()); } catch (_0xc4d4b6) { _0xd47d6c['push'](_0xd47d6c['shift']()); } } }(_0x4516, 0x499db)); import _0x3f8719 from '../database/dbpromise.js'; import { daysDiff } from '../functions/function.js'; const addInstance = async (_0x3a5bfd, _0x362937, _0x28627b) => { const _0x17dddd = _0x21aa; try { const _0x5c7d9e = await _0x3f8719(_0x17dddd(0xd5), [_0x3a5bfd[_0x17dddd(0xd0)][_0x17dddd(0xd6)]]), _0x17b0e0 = _0x5c7d9e[0x0][_0x17dddd(0xdf)]; if (!_0x17b0e0) return _0x362937[_0x17dddd(0xe9)]({ 'msg': _0x17dddd(0xe3) }); const _0x528a29 = daysDiff(_0x5c7d9e[0x0][_0x17dddd(0xdc)]); if (_0x528a29 < 0x1) return _0x362937['json']({ 'msg': _0x17dddd(0xeb) }); const _0x4aa11e = await _0x3f8719(_0x17dddd(0xd2), [_0x3a5bfd['decode']['uid']]), _0x473b7f = parseInt(JSON[_0x17dddd(0xe0)](_0x17b0e0)[_0x17dddd(0xd9)]); if (!_0x473b7f) _0x362937['json']({ 'msg': _0x17dddd(0xda) + _0x473b7f + _0x17dddd(0xcf) }); else { if (_0x4aa11e['length'] < _0x473b7f) { _0x28627b(); return; } else _0x362937['json']({ 'msg': _0x17dddd(0xda) + _0x473b7f + _0x17dddd(0xe2) + _0x4aa11e[_0x17dddd(0xe7)] }); } } catch (_0x420fee) { console[_0x17dddd(0xde)](_0x420fee), _0x362937[_0x17dddd(0xe9)]({ 'err': _0x420fee, 'msg': _0x17dddd(0xd3) }); } }, checkLeftMessage = async (_0x1fec2e, _0x3848c9, _0x315bc8) => { const _0x21e78f = _0x21aa; try { const _0x294bbe = await _0x3f8719(_0x21e78f(0xd5), [_0x1fec2e[_0x21e78f(0xd0)]['uid']]), _0x42abc7 = JSON[_0x21e78f(0xe0)](_0x294bbe[0x0][_0x21e78f(0xdf)]); if (!_0x42abc7) return _0x3848c9[_0x21e78f(0xe9)]({ 'msg': _0x21e78f(0xe1) }); const _0x3f2ab4 = _0x294bbe[0x0]['msglimit']; if (parseInt(_0x3f2ab4) < 0x1) return _0x3848c9[_0x21e78f(0xe9)]({ 'msg': _0x21e78f(0xea) }); _0x1fec2e[_0x21e78f(0xe5)] = parseInt(_0x3f2ab4), _0x315bc8(); } catch (_0x1783f2) { console[_0x21e78f(0xde)](_0x1783f2), _0x3848c9[_0x21e78f(0xe9)]({ 'err': _0x1783f2, 'msg': _0x21e78f(0xd3) }); } }, checkPlanExpiry = async (_0x20642b, _0x1e7c97, _0x477686) => { const _0x432507 = _0x21aa, _0x2a048e = await _0x3f8719(_0x432507(0xd5), [_0x20642b['decode'][_0x432507(0xd6)]]), _0x30ac31 = _0x2a048e[0x0]['plan']; if (!_0x30ac31) return _0x1e7c97['json']({ 'msg': _0x432507(0xe3) }); const _0x1ed136 = daysDiff(_0x2a048e[0x0][_0x432507(0xdc)]); if (_0x1ed136 < 0x1) return _0x1e7c97[_0x432507(0xe9)]({ 'msg': _0x432507(0xeb) }); _0x20642b['planExpire'] = _0x1ed136, _0x477686(); }; function _0x21aa(_0x28e7bd, _0x5acb7a) { const _0x45164d = _0x4516(); return _0x21aa = function (_0x21aad1, _0x606ade) { _0x21aad1 = _0x21aad1 - 0xcf; let _0x43b583 = _0x45164d[_0x21aad1]; return _0x43b583; }, _0x21aa(_0x28e7bd, _0x5acb7a); } function _0x4516() { const _0x2fb876 = ['4777224hwNGjm', 'length', '615SUKyLP', 'json', 'You\x20dont\x20have\x20messages\x20left\x20in\x20your\x20account\x20please\x20renew', 'Your\x20plan\x20has\x20been\x20expired\x20please\x20renew.', '1625070TjVchc', '827212pKKVFB', '\x20you\x20can\x20not\x20added\x20more.', 'decode', '566ZMrJwp', 'SELECT\x20*\x20FROM\x20instance\x20WHERE\x20uid\x20=\x20?', 'server\x20error', '9oUWnFl', 'SELECT\x20*\x20FROM\x20user\x20WHERE\x20uid\x20=\x20?', 'uid', '30NyoxAE', '2851639MlEuYr', 'instance', 'Your\x20allowed\x20instances\x20are\x20', '3ibRKZI', 'planexpire', '1314874DfhWeK', 'log', 'plan', 'parse', 'You\x20dont\x20have\x20a\x20plan\x20please\x20get\x20one', '\x20you\x20can\x20not\x20added\x20more.\x20', 'you\x20dont\x20have\x20a\x20plan\x20please\x20buy\x20one', '272454RRhnhR', 'messageLeft']; _0x4516 = function () { return _0x2fb876; }; return _0x4516(); } export { addInstance, checkLeftMessage, checkPlanExpiry };