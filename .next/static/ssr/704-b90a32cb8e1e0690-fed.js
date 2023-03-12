"use strict";
exports.id = 704;
exports.ids = [704];
exports.modules = {

/***/ 704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCounter": function() { return /* reexport module object */ _useCounter__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);



/***/ }),

/***/ 750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(497);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCounter() {
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const resetCounter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setCount(0);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setCount((c)=>c + 1);
        }, 1000);
        return ()=>clearTimeout(timer);
    }, [
        count
    ]);
    return {
        count,
        resetCounter
    };
}
/* harmony default export */ __webpack_exports__["default"] = (useCounter);


/***/ })

};
;