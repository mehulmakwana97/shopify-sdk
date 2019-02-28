# Shopify SDK (Official Module)

Official Shopify admin API for web

## Installation:

### With Yarn:

```shell
$ yarn add shopify-sdk
```

### With NPM:

```shell
$ npm install --save shopify-sdk
```

## API

This module exports a buildConfig function which takes an options object.

### `Shopify.buildConfig(options)`

Which creates a new `Shopify` instance.

#### Arguments

- `options` - Required - A plain JavaScript object that contains the
configuration options.

#### Options

- `shopName` - Required - A string that specifies the shop name. The shop's
  "myshopify.com" domain is also accepted.
- `apiKey` - Required for [private][generate-private-app-credentials] apps - A
  string that specifies the API key of the app. This option must be used in
  conjunction with the `password` option and is mutually exclusive with the
  `accessToken` option.
- `password` - Required for [private][generate-private-app-credentials] apps -
  A string that specifies the private app password. This option must be used in
  conjunction with the `apiKey` option and is mutually exclusive with the
  `accessToken` option.
- `accessToken` - Required for public apps - A string representing the
  permanent [OAuth 2.0][oauth] access token. This option is mutually exclusive
  with the `apiKey` and `password` options. If you are looking for a premade
  solution to obtain an access token, take a look at the [shopify-token][]
  module.

#### Return value

A `Shopify` instance.

#### Example

```js
import { Shopify } from "shopify-sdk";

const shopify = Shopify.buildConfig({
  shopName: 'your-shop-name',
  apiKey: 'your-api-key',
  password: 'your-app-password'
});
```

### Resources

Every resource is accessed via your `shopify` instance:

```js
const shopify = Shopify.buildConfig({
  shopName: 'your-shop-name',
  accessToken: 'your-oauth-token'
});

// shopify.<resource_name>().<method_name>
```

Each method returns a `Promise` that resolves with the result:

```js
shopify.product().get()
  .then(products => console.log(products))
  .catch(err => console.error(err));
```

The Shopify API requires that you send a valid JSON string in the request body
including the name of the resource. For example, the request body to create a
country should be:

```json
{
  "country": {
    "code": "FR",
    "tax": 0.25
  }
}
```

### Other Examples

```js
shopify.Products(['1333385494614']).fields('id,images,title').get().then(products => {
  console.log(products);
});
```

```js
shopify.Blogs().get().then(blogs => {
  console.log(blogs);
});
```

```js
shopify.Articles().ofBlog('21955412054').get().then(articles => {
  console.log(articles);
});
```

```js
shopify.Articles('28384952406').ofBlog('21955412054')
  .updateOrCreate({
    "article": {
      id: 28384952406,
      "title": "My new Lorem Ipsum",
      "author": "test test",
      "tags": "Lorem Ipsum",
      "body_html": "<strong>Lorem Ipsum</strong><span> Lorem Ipsum",
      "published_at": new Date().toUTCString(),
      "image": {
        name: 'opinion',
        src: "example.jpg",
        alt: "My new Article title",
      }
    }
  }).put().then(article => {
  console.log(article);
});
```

```js
shopify.Articles().ofBlog('21955412054').get().then(articles => {
  console.log(articles);
});
```


```js
shopify.Comments().updateOrCreate({
  "comment": {
    "body": "Lorem Ipsum",
    "author": "test test",
    "email": "psofttech123@gmail.com",
    "blog_id": 21955412054,
    "article_id": 28384952406
  }
}).post().then(comment => {
  console.log(comment);
});
```

```js
shopify.Comments(['22424879190']).updateOrCreate({
  "comment": {
    id: 22424879190,
    published_at: new Date().toUTCString(),
  }
}).put().then(comment => {
  console.log(comment);
});
```

```js
shopify.Comments(['22424879190', 'approve']).post().then(commentApprove => {
  console.log(commentApprove);
});
```

```js
shopify.Comments(['22424879190', 'spam']).post().then(commentSpam => {
  console.log(commentSpam);
});
```

```js
shopify.Comments(['22424879190', 'not_spam']).post().then(commentNotSpam => {
  console.log(commentNotSpam);
});
```

```js
shopify.Comments(['22424879190', 'remove']).post().then(commentRemove => {
  console.log(commentRemove);
});
```

```js
shopify.Comments(['22424879190', 'restore']).post().then(commentRestore => {
  console.log(commentRestore);
});
```

```js
shopify.Pages().get().then(pages => {
  console.log(pages);
});
```

```js
shopify.Pages().sinceId('18521653334').get().then(pagesSince => {
  console.log(pagesSince);
});
```

```js
shopify.Redirects().get().then(redirects => {
  console.log(redirects);
});
```

```js
shopify.Redirects([36784537686]).get().then(redirect => {
  console.log(redirect);
});
```

```js
shopify.ScriptTags().get().then(scriptTags => {
  console.log(ScriptTags);
});
```

```js
shopify.Themes().get().then(themes => {
    console.log(themes);
});
```

```js
shopify.Themes().updateOrCreate({
  "theme": {
    "name": "Dont delete",
    "src": "https://****/theme/dont-delete.zip",
    "role": "unpublished",
  }
}).post().then(theme => {
  console.log(theme);
});
```

```js
shopify.Themes([70895304768]).get().then(theme => {
  console.log(theme);
});
```

```js
shopify.Themes([70895304768]).delete().then(theme => {
  console.log(theme);
});
```

```js
shopify.Assets().ofTheme(70895403072).get().then(assets => {
  console.log(assets);
});
```

```js
shopify.Assets().ofTheme(70895403072).ofKey('assets/ajax-loader.gif').get().then(asset => {
  console.log(asset);
});
```

```js
shopify.Assets().ofTheme(70895403072).updateOrCreate({
  asset: {
    key: 'config/settings_new.json',
    value: JSON.stringify({
      data: {
        id: '70895403072',
      }
    }),
  }
}).put().then(asset => {
  console.log(asset);
});
```

```js
shopify.Assets().ofTheme(70895403072).ofKey('config/settings_new.json').get().then(asset => {
  console.log(asset);
});
```

### Available resources and methods


[generate-private-app-credentials]: https://help.shopify.com/api/guides/api-credentials#generate-private-app-credentials?ref=microapps
[oauth]: https://help.shopify.com/api/guides/authentication/oauth?ref=microapps
