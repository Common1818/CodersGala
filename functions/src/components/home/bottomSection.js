"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _jquery = _interopRequireDefault(require("jquery"));

var _homeContext = require("../../contexts/homeContext");

var BottomSection = function BottomSection() {
  var _useContext = (0, _react.useContext)(_homeContext.HomeContext),
      home = _useContext.home; // const homeArray = home && home.home;
  // const left1 = homeArray && homeArray[0];
  // const left = left1 && left1.left;
  // const middle1 = homeArray && homeArray[0];
  // const middle = middle1 && middle1.middle;
  // const right1 = homeArray && homeArray[0];
  // const right = right1 && right1.right;


  (0, _react.useEffect)(function () {
    // const navbarOpen = $(".navbar-toggler").attr("aria-expanded");
    if (typeof window !== "undefined") {
      if (window.innerWidth < 600) {
        (0, _jquery.default)(window).scroll(function () {
          var scroll = window.scrollY;

          if (scroll < 150) {
            (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
            (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
          }

          if (scroll > 150 && scroll < 450) {
            (0, _jquery.default)(".hero-box__circle--blue").addClass("one");
            (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
          }

          if (scroll > 450 && scroll < 650) {
            (0, _jquery.default)(".hero-box__circle--green").addClass("two");
            (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
            (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
          }

          if (scroll > 650) {
            (0, _jquery.default)(".hero-box__circle--orange").addClass("three");
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
            (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
          }
        });
      }
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-box-container"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-box__circle hero-box__circle--blue"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "What is Coders Gala?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritat. Veritatis, fugit.is, fugit.")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about/#aboutus",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-box__circle hero-box__circle--green"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "Who are We ?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritat. Veritatis, fugit.is, fugit.")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/learn",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-box__circle hero-box__circle--orange"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "Start Learning .."), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritat. Veritatis, fugit.is, fugit."))));
};

var _default = BottomSection;
exports.default = _default;