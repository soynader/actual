const _0x3179ce = _0x7fa2; (function (_0x1273a2, _0x3afb23) { const _0x18e8a6 = _0x7fa2, _0x2faea5 = _0x1273a2(); while (!![]) { try { const _0x53fdf3 = parseInt(_0x18e8a6(0xe3)) / 0x1 * (parseInt(_0x18e8a6(0xee)) / 0x2) + parseInt(_0x18e8a6(0xf7)) / 0x3 * (-parseInt(_0x18e8a6(0xf8)) / 0x4) + -parseInt(_0x18e8a6(0xe1)) / 0x5 * (parseInt(_0x18e8a6(0xf4)) / 0x6) + parseInt(_0x18e8a6(0xf0)) / 0x7 + -parseInt(_0x18e8a6(0xec)) / 0x8 + parseInt(_0x18e8a6(0xf3)) / 0x9 + parseInt(_0x18e8a6(0xeb)) / 0xa; if (_0x53fdf3 === _0x3afb23) break; else _0x2faea5['push'](_0x2faea5['shift']()); } catch (_0x12fb2e) { _0x2faea5['push'](_0x2faea5['shift']()); } } }(_0x523a, 0x4381c)); import { Router } from 'express'; import *as _0x4a782e from '../controllers/phonebookController.js'; function _0x7fa2(_0xb67601, _0xffdfd0) { const _0x523ae6 = _0x523a(); return _0x7fa2 = function (_0x7fa239, _0x554e69) { _0x7fa239 = _0x7fa239 - 0xe1; let _0x128009 = _0x523ae6[_0x7fa239]; return _0x128009; }, _0x7fa2(_0xb67601, _0xffdfd0); } import _0x1646c1 from '../middlewares/userValidator.js'; function _0x523a() { const _0x312739 = ['post', '9HLFnSQ', '190796mGnGLg', '33265kVyNrq', 'deleteContact', '446eqRUBN', 'addPhoneNumPaste', '/add-csv', '/add-contact', 'addPhoneBook', 'adCSV', '/add-contact-paste', '/delete-phonebook', '1071400SVmgry', '3669904cWrkyv', '/add-phonebook', '1966VSDDFg', '/get-contact', '2796157euIZzQ', '/get-phonebook', 'get', '3351888JXmMju', '396UlYqkx', '/delete-contact']; _0x523a = function () { return _0x312739; }; return _0x523a(); } const router = Router(); router[_0x3179ce(0xf6)](_0x3179ce(0xed), _0x1646c1, _0x4a782e[_0x3179ce(0xe7)]), router[_0x3179ce(0xf6)](_0x3179ce(0xe9), _0x1646c1, _0x4a782e[_0x3179ce(0xe4)]), router[_0x3179ce(0xf2)](_0x3179ce(0xf1), _0x1646c1, _0x4a782e['getPhoneBook']), router['post'](_0x3179ce(0xea), _0x1646c1, _0x4a782e['deletePhoneBook']), router[_0x3179ce(0xf6)](_0x3179ce(0xe6), _0x1646c1, _0x4a782e['addContact']), router[_0x3179ce(0xf2)](_0x3179ce(0xef), _0x1646c1, _0x4a782e['getContacts']), router['post'](_0x3179ce(0xf5), _0x1646c1, _0x4a782e[_0x3179ce(0xe2)]), router[_0x3179ce(0xf6)](_0x3179ce(0xe5), _0x1646c1, _0x4a782e[_0x3179ce(0xe8)]); export default router;