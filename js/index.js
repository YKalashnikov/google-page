var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Google = function (_React$Component) {
  _inherits(Google, _React$Component);

  function Google() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Google);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Google.__proto__ || Object.getPrototypeOf(Google)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyPress = function (event) {
      if (event.charCode === 13) {
        var getString = JSON.stringify(event.target.value);
        var converFromString = JSON.parse(getString);
        //  console.log(data)
        window.open('https://www.google.ca/#q=' + converFromString);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Google, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          { className: "firstTable" },
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { className: "about" },
              "About"
            ),
            React.createElement(
              "th",
              { className: "store" },
              "Store"
            ),
            React.createElement(
              "th",
              { className: "gmail" },
              "Gmail"
            ),
            React.createElement(
              "th",
              { className: "img" },
              "Images"
            ),
            React.createElement(
              "th",
              { className: "square" },
              React.createElement(
                "a",
                { href: "" },
                React.createElement("img", { src: "http://i1243.photobucket.com/albums/gg549/ermiasgiovanni/google_apps_zps7bzspske.png" })
              )
            ),
            React.createElement(
              "th",
              { className: "bell" },
              React.createElement(
                "a",
                { href: "" },
                React.createElement("img", { id: "notifications_bell", src: "http://i1243.photobucket.com/albums/gg549/ermiasgiovanni/notifications_bell_zpsy1i3r9mi.jpg" })
              )
            ),
            React.createElement(
              "th",
              { className: "icon" },
              React.createElement(
                "a",
                { href: "" },
                React.createElement("img", { id: "profile", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDA7_MmC1Xy6989HuhkQ3rfBzr3BqRhQGf4AAM4dqvVF4hcql" })
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "box" },
          React.createElement(
            "div",
            null,
            React.createElement("img", { alt: "Google Logo", src: "http://i0.kym-cdn.com/photos/images/original/001/019/423/eea.gif", height: "140", width: "390" })
          ),
          React.createElement(
            "div",
            { className: "search" },
            React.createElement("input", { className: "input1", type: "text", title: "search", id: "microphone", maxlength: "10", onKeyPress: this.handleKeyPress })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              null,
              " Google Search "
            ),
            React.createElement(
              "button",
              null,
              " I'm Feeling Lucky "
            )
          ),
          React.createElement(
            "p",
            null,
            "Google offered in:"
          )
        ),
        React.createElement(
          "footer",
          null,
          React.createElement(
            "table",
            { className: "secondTable" },
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { className: "advertising" },
                "Advertising"
              ),
              React.createElement(
                "th",
                { className: "business" },
                "Business"
              ),
              React.createElement(
                "th",
                { className: "privacy" },
                "Privacy"
              ),
              React.createElement(
                "th",
                { className: "term" },
                "Term"
              ),
              React.createElement(
                "th",
                { className: "setting" },
                "Settings"
              )
            )
          )
        )
      );
    }
  }]);

  return Google;
}(React.Component);

ReactDOM.render(React.createElement(Google, null), document.getElementById("app"));