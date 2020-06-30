"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _articleContext = require("../../../contexts/articleContext");

var _topicContext = require("../../../contexts/topicContext");

var _authContext = require("../../../contexts/authContext");

var _jquery = _interopRequireDefault(require("jquery"));

var _Footer = _interopRequireDefault(require("../../layout/Footer/Footer"));

var _this = void 0;

var SelectedArticle = function SelectedArticle(props) {
  var articles = props.articles;
  var value;

  if (typeof window !== "undefined") {
    var _useState = (0, _react.useState)(window.location.href),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        _value = _useState2[0],
        setValue = _useState2[1];
  }

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      copied = _useState4[0],
      setCopied = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      locked = _useState8[0],
      setLocked = _useState8[1]; // const { articles } = useContext(ArticlesContext);


  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authState = _useContext.authState,
      authData = _useContext.authData;

  var _useContext2 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext2.topics; // const Articles = articles && articles.articles;


  var _props$match$params = props.match.params,
      specialityId = _props$match$params.specialityId,
      topicId = _props$match$params.topicId,
      Id = _props$match$params.Id;
  console.log(Id);
  console.log(Id.replace(/-/g, " "));
  var NId = Id.replace(/-/g, " ");
  var url;

  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  var goToTop = function goToTop() {
    (0, _jquery.default)("html, body").animate({
      scrollTop: 10
    }, 200);
  };

  topics.topics && authData.userProfile && topics.topics.map(function (item) {
    if (item.id == topicId && item.locked) {
      setLocked(true);
      authState.uid == null ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
        to: "/signup"
      }) : authData.userProfile.UnlockedTopicId.map(function (idItem) {
        if (idItem == topicId) setShow(true);
      });
    }
  }); // Add React Helmet Regardless of locked since its already taken care of

  return !locked || locked && show ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-article"
  }, articles && articles.map(function (article) {
    if (article.ArticleName === NId) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, article.ArticleName), /*#__PURE__*/_react.default.createElement("meta", {
        name: "description",
        content: article.keywords
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "robots",
        content: "index follow"
      })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
        key: article.id,
        className: "full-view-article p-2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "share-icons"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "share-toggle",
        onClick: function onClick() {
          (0, _jquery.default)(_this).css({
            transform: "rotate(" + "180" + "deg)"
          });
          (0, _jquery.default)(".share-image").toggleClass("show");
        }
      }, /*#__PURE__*/_react.default.createElement("svg", {
        style: {
          width: "25px"
        },
        class: "svg-icon",
        viewBox: "0 0 20 20"
      }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("path", {
        fill: "none",
        d: "M19.175,4.856L15.138,0.82c-0.295-0.295-0.817-0.295-1.112,0L8.748,6.098c-0.307,0.307-0.307,0.805,0,1.112l1.462,1.462l-1.533,1.535L7.215,8.746c-0.307-0.307-0.805-0.307-1.112,0l-5.278,5.276c-0.307,0.307-0.307,0.805,0,1.112l4.037,4.037c0.154,0.153,0.355,0.23,0.556,0.23c0.201,0,0.403-0.077,0.556-0.23l5.28-5.276c0.148-0.148,0.23-0.347,0.23-0.556c0-0.209-0.083-0.409-0.23-0.556l-1.464-1.464l1.533-1.535l1.462,1.462c0.153,0.153,0.355,0.23,0.556,0.23c0.201,0,0.402-0.077,0.556-0.23l5.278-5.278c0.147-0.147,0.23-0.347,0.23-0.556C19.406,5.203,19.322,5.004,19.175,4.856zM9.585,13.339l-4.167,4.164l-2.925-2.925l4.166-4.164l0.906,0.905l-0.67,0.668c-0.307,0.307-0.307,0.805,0,1.112c0.154,0.153,0.356,0.23,0.556,0.23c0.203,0,0.403-0.077,0.556-0.23l0.67-0.668L9.585,13.339z M13.341,9.578l-0.906-0.906l0.663-0.662c0.307-0.307,0.307-0.805,0-1.112c-0.307-0.307-0.805-0.307-1.112,0L11.322,7.56l-0.906-0.906l4.166-4.166l2.925,2.925L13.341,9.578z"
      }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
        placement: "right",
        overlay: copied ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Link Copied to ClipBoard") : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Copy link to clipboard")
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "link",
        className: "link-icon"
      }, /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
        text: value,
        onCopy: function onCopy() {
          return setCopied(true);
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "share-image",
        src: "https://www.svgrepo.com/show/47491/link.svg",
        alt: "copy link of " + article.ArticleName
      })))), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
        placement: "right",
        overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Share via mail")
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "mail-icon"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "mail-icon",
        href: "mailto:?Subject=".concat("Article on " + article.ArticleName, "&Body=Hey look i just found out this Amazing article on \"").concat(article.ArticleName, "\",Check it out : ").concat(url),
        target: "_top",
        rel: "nofollow"
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "share-image",
        src: "https://www.svgrepo.com/show/303161/gmail-icon-logo.svg",
        alt: "share " + article.ArticleName + " on Gmail"
      })))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
        placement: "right",
        overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Share on WhatsApp")
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
        className: "whatsapp-icon",
        rel: "noopener noreferrer",
        href: "https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on \"".concat(article.ArticleName, "\",Check it out : ").concat(url),
        target: "_blank"
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "share-image",
        src: "https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg",
        alt: "share " + article.ArticleName + " on Whatsapp"
      }))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        sm: 1
      }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        id: "top",
        style: {
          padding: "0px"
        },
        sm: 8
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "full-article ql-editor",
        dangerouslySetInnerHTML: {
          __html: article.ArticleContent
        }
      })), /*#__PURE__*/_react.default.createElement("a", {
        rel: "nofollow",
        href: "#"
      }, /*#__PURE__*/_react.default.createElement("img", {
        onClick: goToTop,
        className: "top-icon",
        id: "go-to-top",
        style: {
          width: "30px"
        },
        src: "https://www.svgrepo.com/show/247787/up-arrow-upload.svg",
        alt: "Go on Top of " + article.ArticleName
      }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "full-page ad",
        sm: 3
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/66572/1590680720-CSS_arcade_600x600.jpg",
        alt: ""
      }))));
    }

    return null;
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/learn/" + specialityId
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "back-btn",
    src: "https://www.svgrepo.com/show/50213/back.svg",
    alt: "back button"
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, null)) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/signup"
  });
};

var _default = SelectedArticle;
exports.default = _default;