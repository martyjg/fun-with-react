var contacts = [
    {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: 2, name: "Jim", email: "jim@example.com"},
    {key: 3, name: "Joe"},
    {key: 4, name: "Marty Gormley", email: "marty@marty.com", description: "lolololololol"}
];

var newContact = {name: "", email: "", description: ""};

var ContactItem  = React.createClass( {
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
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

var ContactForm = React.createClass( {
  proptypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
    React.createElement("form", {},
      React.createElement("input", {type: "text", placeholder: "Name (required)", value: this.props.contact.name}),
      React.createElement("input", {type: "text", placeholder: "Email (required)", value: this.props.contact.email}),
      React.createElement("textarea", {placeholder: "Description", value: this.props.contact.description}),
      React.createElement("button", {type: "submit"}, "Add Contact")
      )
    )
  }
});

var listElements = contacts
.filter(function(contact) { return contact.email })
.map(function(contact) { return React.createElement(ContactItem, contact) });

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
    ),
  React.createElement("h1", {}, "Contact Form"),
  React.createElement(ContactForm, {contact: newContact})
);

ReactDOM.render(rootElement, document.getElementById("react-app"));
// ReactDOM.render(ContactForm, document.getElementById("react-app"));