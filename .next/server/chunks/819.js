"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dq": () => (/* binding */ editPost),
/* harmony export */   "fR": () => (/* binding */ deletePost),
/* harmony export */   "qb": () => (/* binding */ createPost),
/* harmony export */   "wP": () => (/* binding */ storePosts)
/* harmony export */ });
/* unused harmony export postSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    posts: []
};
const postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        storePosts: (state, action)=>{
            state.posts = [
                ...action.payload
            ];
        },
        createPost: (state, action)=>{
            state.posts = [
                action.payload,
                ...state.posts
            ];
        },
        deletePost: (state, action)=>{
            state.posts = state.posts.filter((post)=>action.payload != post.id);
        },
        editPost: (state, action)=>{
            state.posts = [
                action.payload,
                ...state.posts.filter((post)=>action.payload.id != post.id)
            ];
        }
    }
});
const { storePosts , createPost , deletePost , editPost  } = postSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);


/***/ })

};
;