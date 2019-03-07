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
shopify.balance().get().then(balance => {
  console.log(balance);
});
```

```js
shopify.dispute().get().then(disputes => {
  console.log(disputes);
});
```

```js
shopify.dispute(123456).get().then(dispute => {
  console.log(dispute);
});
```

```js
shopify.transaction().get().then(transactions => {
  console.log(transactions);
});
```

```js
shopify.accessScope().get().then(accessScope => {
  console.log(accessScope);
});
```

```js
shopify.storefrontAccessToken().get().then(accessTokens => {
  console.log(accessTokens);
});
```

```js
shopify.storefrontAccessToken(755357713).get().then(accessToken => {
  console.log(accessToken);
});
```

```js
shopify.report().get().then(reports => {
  console.log(reports);
});
```

```js
shopify.report(682357713).get().then(report => {
  console.log(report);
});
```

```js
shopify.applicationCharge().get().then(applicationCharges => {
  console.log(applicationCharges);
});
```

```js
shopify.applicationCharge(45467871).get().then(applicationCharge => {
  console.log(applicationCharge);
});
```

```js
shopify.applicationCharge(45467871).activate().post().then(applicationChargeActivate => {
  console.log(applicationChargeActivate);
});
```

```js
shopify.applicationCredit().updateOrCreate({...}).post().then(applicationCredit => {
  console.log(applicationCredit);
});
```

```js
shopify.applicationCredit().get().then(applicationCredits => {
  console.log(applicationCredits);
});
```

```js
shopify.applicationCredit(79463336).get().then(applicationCredit => {
  console.log(applicationCredit);
});
```

```js
shopify.recurringApplicationCharge().updateOrCreate({...}).post().then(recurringApplicationCharge => {
  console.log(recurringApplicationCharge);
});
```

```js
shopify.recurringApplicationCharge(54646721).get().then(recurringApplicationCharge => {
  console.log(recurringApplicationCharge);
});
```

```js
shopify.recurringApplicationCharge().get().then(recurringApplicationCharges => {
  console.log(recurringApplicationCharges);
});
```

```js
shopify.recurringApplicationCharge(54646721).activate().updateOrCreate({...}).post().then(recurringApplicationCharge => {
  console.log(recurringApplicationCharge);
});
```

```js
shopify.recurringApplicationCharge(54646721).customize().setParams('recurring_application_charge[capped_amount]', 200).put().then(recurringApplicationCharge => {
  console.log(recurringApplicationCharge);
});
```

```js
shopify.recurringApplicationCharge(54646721).usageCharges().updateOrCreate({...}).post().then(usageCharge => {
  console.log(usageCharge);
});
```

```js
shopify.recurringApplicationCharge(54646721).usageCharges(79796464).get().then(usageCharge => {
  console.log(usageCharge);
});
```

```js
shopify.recurringApplicationCharge(54646721).usageCharges().get().then(usageCharges => {
  console.log(usageCharges);
});
```

```js
shopify.customer().get().then(customers => {
  console.log(customers);
});
```

```js
shopify.customer().search('Bob country:United States').get().then(customers => {
  console.log(customers);
});
```

```js
shopify.customer(8464698464).get().then(customers => {
  console.log(customers);
});
```

```js
shopify.customer().updateOrCreate({...}).post().then(customer => {
  console.log(customer);
});
```

```js
shopify.customer(8464698464).updateOrCreate({...}).put().then(customer => {
  console.log(customer);
});
```

```js
shopify.customer().accountActivationUrl().post().then(url => {
  console.log(url);
});
```

```js
shopify.customer().sendInvite().updateOrCreate({...}).post().then(customerInvite => {
  console.log(customerInvite);
});
```

```js
shopify.customer(8464698464).order().get().then(orders => {
  console.log(orders);
});
```

```js
shopify.customer(8464698464).address().get().then(addresses => {
  console.log(addresses);
});
```

```js
shopify.customer(8464698464).address(79464613).get().then(address => {
  console.log(address);
});
```

```js
shopify.customer(8464698464).address().updateOrCreate({...}).post().then(address => {
  console.log(address);
});
```

```js
shopify.customer(8464698464).address(79464613).updateOrCreate({...}).put().then(address => {
  console.log(address);
});
```

```js
shopify.customer(8464698464).address(79464613).delete().then(address => {
  console.log(address);
});
```

```js
shopify.customer(8464698464).address().setParams('address_ids', '1053317288').setParams('operation', 'destroy').put().then(address => {
  console.log(address);
});
```

```js
shopify.customer(8464698464).address(79464613).default().put().then(address => {
  console.log(address);
});
```

```js
shopify.customerSavedSearch().get().then(savedSearches => {
  console.log(savedSearches);
});
```

```js
shopify.customerSavedSearch(5646464987).get().then(savedSearch => {
  console.log(savedSearch);
});
```

```js
shopify.customerSavedSearch(5646464987).customer().get().then(savedSearch => {
  console.log(savedSearch);
});
```

```js
shopify.customerSavedSearch().updateOrCreate({...}).post().then(savedSearch => {
  console.log(savedSearch);
});
```

```js
shopify.customerSavedSearch(5646464987).updateOrCreate({...}).put().then(savedSearch => {
  console.log(savedSearch);
});
```

```js
shopify.priceRule().updateOrCreate({...}).post().then(priceRule => {
  console.log(priceRule);
});
```

```js
shopify.priceRule(98746464).updateOrCreate({...}).put().then(priceRule => {
  console.log(priceRule);
});
```

```js
shopify.priceRule().get().then(priceRules => {
  console.log(priceRules);
});
```

```js
shopify.priceRule(98746464).get().then(priceRule => {
  console.log(priceRule);
});
```



```js
shopify.article().author().get().then(authors => {
  console.log(authors);
});
```

```js
shopify.article().tag().get().then(tags => {
  console.log(tags);
});
```

```js
shopify.blog().get().then(blogs => {
  console.log(blogs);
});
```

```js
shopify.blog(21955412054).get().then(blog => {
  console.log(blog);
});
```

```js
shopify.blog(21955412054).article().get().then(articles => {
  console.log(articles);
});
```

```js
shopify.blog(21955412054).article(28384952406).get().then(article => {
  console.log(article);
});
```

```js
shopify.blog(21955412054).article(28384952406)
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
shopify.theme().get().then(themes => {
    console.log(themes);
});
```

```js
shopify.theme().updateOrCreate({
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
shopify.theme(70895304768).get().then(theme => {
  console.log(theme);
});
```

```js
shopify.theme(70895304768).delete().then(theme => {
  console.log(theme);
});
```

```js
shopify.theme(70895304768).asset().get().then(assets => {
  console.log(assets);
});
```

```js
shopify.theme(70895304768).asset().ofKey('assets/ajax-loader.gif').get().then(asset => {
  console.log(asset);
});
```

```js
shopify.theme(70895304768).asset().updateOrCreate({
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
shopify.product('1333385494614').fields('id,images,title').get().then(products => {
  console.log(products);
});
```

```js
shopify.smartCollection().get().then(collections => {
  console.log(collections);
});
```

```js
shopify.smartCollection().count().get().then(collectionCount => {
  console.log(collectionCount);
});
```

```js
shopify.smartCollection([1234566]).get().then(collection => {
  console.log(collection);
});
```

```js
shopify.smartCollection([1234566, 'order']).setParams('products[]', '921728736').setParams('products[]', '632910392').put().then(collection => {
  console.log(collection);
});
```

```js
shopify.smartCollection([1234566, 'order']).setParams('sort_order', 'alpha-desc').put().then(collection => {
  console.log(collection);
});
```


### Available resources and methods


[generate-private-app-credentials]: https://help.shopify.com/api/guides/api-credentials#generate-private-app-credentials?ref=microapps
[oauth]: https://help.shopify.com/api/guides/authentication/oauth?ref=microapps
