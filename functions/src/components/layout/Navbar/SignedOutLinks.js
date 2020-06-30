"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var SignedOutLinks = function SignedOutLinks() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav ml-auto py-4 py-md-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/home",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "nav-link"
  }, "About")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link ",
    to: "/learn",
    role: "button",
    "aria-expanded": "false"
  }, "Learn"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu"
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link ",
    to: "/login",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Login"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu"
  }))));
};

var _default = SignedOutLinks;
exports.default = _default;