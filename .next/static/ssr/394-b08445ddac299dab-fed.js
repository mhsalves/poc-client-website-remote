"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Timer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(878);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(497);
// EXTERNAL MODULE: ./src/hooks/useCounter.ts
var useCounter = __webpack_require__(750);
;// CONCATENATED MODULE: ./src/components/Timer/styles.ts

const container = {
    display: "flex",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    flexDirection: "column",
    border: "1px solid black",
    padding: "1rem",
    boxSizing: "border-box"
};
const heading = {
    margin: 0
};
const counter = {
    fontSize: "2rem",
    textAlign: "center"
};
const resetButton = {
    height: "2rem"
};
/* harmony default export */ var styles = ({
    container,
    heading,
    counter,
    resetButton
});

;// CONCATENATED MODULE: ./src/components/Timer/index.tsx




function Timer() {
    const { count , resetCounter  } = (0,useCounter["default"])();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                style: styles.heading,
                children: "Timer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                style: styles.counter,
                children: count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                style: styles.resetButton,
                onClick: ()=>resetCounter(),
                children: "Reiniciar contador"
            })
        ]
    });
}
/* harmony default export */ var components_Timer = (Timer);


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