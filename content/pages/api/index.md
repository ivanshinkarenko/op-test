---
path: "/api"
date: "2018-05-01"
title: "Introduction"
tags: ["introduction"]
id: 1
---

# Header 1

<div class="code-section">

  <div class="code-section--text">

The Stripe API around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs. |You can use the Stripe API in test mode, which does not affect your live data or interact with the banking networks.

The API key you use to authenticate the request determines whether the request is live mode or test mode.

  </div>

  <div class="code-section--code">
    <div class="code code--dark">
    <div class="code-header">Authenticated Request</div>

```javascript{numberLines: true}
The API key you use to authenticate
the request determines whether the request
is live mode or test mode.

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
];
```

  </div>

  <div class="code code--light">
  <div class="code-header">Authenticated Request</div>

```javascript{numberLines: true}
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
];
```

</div>

  </div>
  <!-- end code-section--code -->

</div>
<!-- end code-section -->

---

# Header 2

<div class="code-section">
<div class="code-section--text">

The Stripe API differs for every account as we release new versions and tailor functionality. Log in to see docs customized to your version of the API, with your test key and data.

</div>

<div class="code-section--code">

```jsx{numberLines: true}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
}
```

</div>

</div>

---

# Header 3

<div class="code-section">

  <div class="code-section--text">

The Stripe API around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs. |You can use the Stripe API in test mode, which does not affect your live data or interact with the banking networks.

The API key you use to authenticate the request determines whether the request is live mode or test mode.

  </div>

  <div class="code-section--code">
    <div class="code code--dark">
    <div class="code-header">Authenticated Request</div>

```javascript{numberLines: true}
The API key you use to authenticate
the request determines whether the request
is live mode or test mode.

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
];
```

  </div>

  <div class="code code--light">
  <div class="code-header">Authenticated Request</div>

```javascript{numberLines: true}
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
];
```

</div>

  </div>
  <!-- end code-section--code -->

</div>
<!-- end code-section -->

---
