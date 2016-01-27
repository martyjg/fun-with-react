console.log("wat up");

var rootElement = 
React.createElement("div", {},
  React.createElement("h1", {}, "Contacts"),
  React.createElement("ul", {},
    React.createElement("li", {},
      React.createElement("h2", {}, "Marty Gormley"),
      React.createElement("a", {href: "mailto:marty@martygormley.com"}, "marty@martygormley.com")
      ),
    React.createElement("li", {},
      React.createElement("h2", {}, "Nota Reelperson"),
      React.createElement("a", {href: "mailto:blah@blah.com"}, "blah@blah.com")
      )
    )
  );

ReactDOM.render(rootElement, document.getElementById("react-app"))