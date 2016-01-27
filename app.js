var contacts = [
    {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: 2, name: "Jim", email: "jim@example.com"},
    {key: 3, name: "Joe"},
    {key: 4, name: "Marty Gormley", email: "marty@marty.com", description: "LOLOLOLOLOL Dev"}
]

var ContactItem  = React.createClass( {
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement("li", {className: "Contact"},
        React.createElement("h2", {className: "Contact-name"}, this.props.name),
        React.createElement("h3", {className: "Contact-email"}, this.props.email),
        React.createElement("p", {className: "Contact-description"}, this.props.description)
      )
    )
  },
});

var listElements = contacts
.filter(function(contact) { return contact.email })
.map(function(contact) { return React.createElement(ContactItem, contact) })

var rootElement = 
React.createElement("div", {},
  React.createElement("h1", {}, "Contacts"),
  React.createElement("ul", {}, listElements
    // React.createElement(ContactItem
    //   // React.createElement("h2", {}, "Marty Gormley"),
    //   // React.createElement("a", {href: "mailto:marty@martygormley.com"}, "marty@martygormley.com")
    //   )
    // React.createElement("li", {},
    //   React.createElement("h2", {}, "Nota Reelperson"),
    //   React.createElement("a", {href: "mailto:blah@blah.com"}, "blah@blah.com")
    //   )
    )
);

ReactDOM.render(rootElement, document.getElementById("react-app"))