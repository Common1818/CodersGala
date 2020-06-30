/* eslint-disable */
import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ArticlesContext } from "../../../contexts/articleContext";
import { TopicsContext } from "../../../contexts/topicContext";
import { AuthContext } from "../../../contexts/authContext";

import "./css/article.css";
import "react-quill/dist/quill.snow.css";
import $ from "jquery";
import Footer from "../../layout/Footer/Footer";

const SelectedArticle = (props) => {
  const articles = props.articles;
  var value;

  if (typeof window !== "undefined") {
    const [value, setValue] = useState(window.location.href);
  }

  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const [locked, setLocked] = useState(false);

  // const { articles } = useContext(ArticlesContext);
  const { authState, authData } = useContext(AuthContext);
  const { topics } = useContext(TopicsContext);

  // const Articles = articles && articles.articles;
  const { specialityId, topicId, Id } = props.match.params;
  console.log(Id);
  console.log(Id.replace(/-/g, " "));
  const NId = Id.replace(/-/g, " ");
  var url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  const goToTop = () => {
    $("html, body").animate({ scrollTop: 10 }, 200);
  };

  topics.topics &&
    authData.userProfile &&
    topics.topics.map((item) => {
      if (item.id == topicId && item.locked) {
        setLocked(true);
        authState.uid == null ? (
          <Redirect to="/signup" />
        ) : (
          authData.userProfile.UnlockedTopicId.map((idItem) => {
            if (idItem == topicId) setShow(true);
          })
        );
      }
    });

  // Add React Helmet Regardless of locked since its already taken care of

  return !locked || (locked && show) ? (
    <div>
      <div className="selected-article">
        {articles &&
          articles.map((article) => {
            if (article.ArticleName === NId) {
              return (
                <div>
                  <Helmet>
                    <title>{article.ArticleName}</title>
                    <meta name="description" content={article.keywords} />
                    <meta name="robots" content="index follow" />
                  </Helmet>
                  <Row key={article.id} className="full-view-article p-2">
                    <div className="share-icons">
                      <a
                        className="share-toggle"
                        onClick={() => {
                          $(this).css({
                            transform: "rotate(" + "180" + "deg)",
                          });
                          $(".share-image").toggleClass("show");
                        }}
                      >
                        <svg
                          style={{ width: "25px" }}
                          class="svg-icon"
                          viewBox="0 0 20 20"
                        >
                          <br />
                          <path
                            fill="none"
                            d="M19.175,4.856L15.138,0.82c-0.295-0.295-0.817-0.295-1.112,0L8.748,6.098c-0.307,0.307-0.307,0.805,0,1.112l1.462,1.462l-1.533,1.535L7.215,8.746c-0.307-0.307-0.805-0.307-1.112,0l-5.278,5.276c-0.307,0.307-0.307,0.805,0,1.112l4.037,4.037c0.154,0.153,0.355,0.23,0.556,0.23c0.201,0,0.403-0.077,0.556-0.23l5.28-5.276c0.148-0.148,0.23-0.347,0.23-0.556c0-0.209-0.083-0.409-0.23-0.556l-1.464-1.464l1.533-1.535l1.462,1.462c0.153,0.153,0.355,0.23,0.556,0.23c0.201,0,0.402-0.077,0.556-0.23l5.278-5.278c0.147-0.147,0.23-0.347,0.23-0.556C19.406,5.203,19.322,5.004,19.175,4.856zM9.585,13.339l-4.167,4.164l-2.925-2.925l4.166-4.164l0.906,0.905l-0.67,0.668c-0.307,0.307-0.307,0.805,0,1.112c0.154,0.153,0.356,0.23,0.556,0.23c0.203,0,0.403-0.077,0.556-0.23l0.67-0.668L9.585,13.339z M13.341,9.578l-0.906-0.906l0.663-0.662c0.307-0.307,0.307-0.805,0-1.112c-0.307-0.307-0.805-0.307-1.112,0L11.322,7.56l-0.906-0.906l4.166-4.166l2.925,2.925L13.341,9.578z"
                          ></path>
                        </svg>
                      </a>
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          copied ? (
                            <Tooltip id={"tooltip-right"}>
                              Link Copied to ClipBoard
                            </Tooltip>
                          ) : (
                            <Tooltip id={"tooltip-right"}>
                              Copy link to clipboard
                            </Tooltip>
                          )
                        }
                      >
                        <div id="link" className="link-icon">
                          <CopyToClipboard
                            text={value}
                            onCopy={() => setCopied(true)}
                          >
                            <img
                              className="share-image"
                              src="https://www.svgrepo.com/show/47491/link.svg"
                              alt={"copy link of " + article.ArticleName}
                            />
                          </CopyToClipboard>
                        </div>
                      </OverlayTrigger>
                      <div></div>

                      <br />
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={"tooltip-right"}>Share via mail</Tooltip>
                        }
                      >
                        <div className="mail-icon">
                          <a
                            className="mail-icon"
                            href={`mailto:?Subject=${
                              "Article on " + article.ArticleName
                            }&Body=Hey look i just found out this Amazing article on "${
                              article.ArticleName
                            }",Check it out : ${url}`}
                            target="_top"
                            rel="nofollow"
                          >
                            <img
                              className="share-image"
                              src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg"
                              alt={"share " + article.ArticleName + " on Gmail"}
                            />
                          </a>
                        </div>
                      </OverlayTrigger>
                      <br />
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={"tooltip-right"}>
                            Share on WhatsApp
                          </Tooltip>
                        }
                      >
                        <div>
                          <a
                            className="whatsapp-icon"
                            rel="noopener noreferrer"
                            href={`https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on "${article.ArticleName}",Check it out : ${url}`}
                            target="_blank"
                          >
                            <img
                              className="share-image"
                              src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg"
                              alt={
                                "share " + article.ArticleName + " on Whatsapp"
                              }
                            />
                          </a>
                        </div>
                      </OverlayTrigger>
                    </div>
                    <Col sm={1}>
                      {/* ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br /> */}
                    </Col>

                    <Col id="top" style={{ padding: "0px" }} sm={8}>
                      <div className="ql-snow">
                        <div
                          className="full-article ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: article.ArticleContent,
                          }}
                        ></div>
                      </div>
                      <a rel="nofollow" href="#">
                        <img
                          onClick={goToTop}
                          className="top-icon"
                          id="go-to-top"
                          style={{ width: "30px" }}
                          src="https://www.svgrepo.com/show/247787/up-arrow-upload.svg"
                          alt={"Go on Top of " + article.ArticleName}
                        />
                      </a>
                    </Col>

                    <Col className="full-page ad" sm={3}>
                      <img
                        src="https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/66572/1590680720-CSS_arcade_600x600.jpg"
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>
              );
            }
            return null;
          })}
      </div>
      <Link to={"/learn/" + specialityId}>
        <img
          className="back-btn"
          src="https://www.svgrepo.com/show/50213/back.svg"
          alt="back button"
        />
      </Link>
      <Footer />
    </div>
  ) : (
    <Redirect to="/signup" />
  );
};

export default SelectedArticle;
