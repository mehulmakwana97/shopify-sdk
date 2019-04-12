"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
class Shopify {
    /**
     * Default options:
     *
     *  shopName: string;
     *  accessToken?: string;
     *  apiKey?: string;
     *  password?: string;
     */
    static buildConfig(options) {
        const shopify = new Shopify();
        shopify.config = {
            auth: !options.accessToken && { username: options.apiKey, password: options.password },
            hostname: !options.shopName.endsWith('.myshopify.com')
                ? `${options.shopName}.myshopify.com`
                : options.shopName,
            protocol: 'https:',
            accessToken: options.accessToken,
        };
        return shopify;
    }
    constructor() { }
    balance() {
        return new api_1.default.Balance(this);
    }
    dispute(id) {
        return new api_1.default.Disputes(this, id);
    }
    payout(id) {
        return new api_1.default.Payouts(this, id);
    }
    transaction() {
        return new api_1.default.Transactions(this);
    }
    accessScope() {
        return new api_1.default.AccessScopes(this);
    }
    storefrontAccessToken(id) {
        return new api_1.default.StorefrontAccessTokens(this, id);
    }
    report(id) {
        return new api_1.default.Reports(this, id);
    }
    applicationCharge(id) {
        return new api_1.default.ApplicationCharges(this, id);
    }
    applicationCredit(id) {
        return new api_1.default.ApplicationCredits(this, id);
    }
    recurringApplicationCharge(id) {
        return new api_1.default.RecurringApplicationCharges(this, id);
    }
    customer(id) {
        return new api_1.default.Customers(this, id);
    }
    customerSavedSearch(id) {
        return new api_1.default.CustomerSavedSearches(this, id);
    }
    priceRule(id) {
        return new api_1.default.PriceRules(this, id);
    }
    event(id) {
        return new api_1.default.Events(this, id);
    }
    webhook(id) {
        return new api_1.default.Webhooks(this, id);
    }
    inventoryItem(id) {
        return new api_1.default.InventoryItems(this, id);
    }
    inventoryLevel(id) {
        return new api_1.default.InventoryLevels(this, id);
    }
    location(id) {
        return new api_1.default.Locations(this, id);
    }
    marketingEvent(id) {
        return new api_1.default.MarketingEvents(this, id);
    }
    metafield(id) {
        return new api_1.default.Metafields(this, id);
    }
    article() {
        return new api_1.default.Articles(this);
    }
    blog(id) {
        return new api_1.default.Blogs(this, id);
    }
    comment(id) {
        return new api_1.default.Comments(this, id);
    }
    page(id) {
        return new api_1.default.Pages(this, id);
    }
    redirect(id) {
        return new api_1.default.Redirects(this, id);
    }
    scriptTag(id) {
        return new api_1.default.ScriptTags(this, id);
    }
    theme(id) {
        return new api_1.default.Themes(this, id);
    }
    order(id) {
        return new api_1.default.Orders(this, id);
    }
    checkout() {
        return new api_1.default.Checkouts(this);
    }
    draftOrder(id) {
        return new api_1.default.DraftOrders(this, id);
    }
    product(id) {
        return new api_1.default.Products(this, id);
    }
    collect(id) {
        return new api_1.default.Collects(this, id);
    }
    customCollection(id) {
        return new api_1.default.CustomCollections(this, id);
    }
    smartCollection(id) {
        return new api_1.default.SmartCollections(this, id);
    }
    shop() {
        return new api_1.default.Shop(this);
    }
    country(id) {
        return new api_1.default.Country(this, id);
    }
    shippingZone() {
        return new api_1.default.ShippingZone(this);
    }
    currency() {
        return new api_1.default.Currency(this);
    }
    policy() {
        return new api_1.default.Policy(this);
    }
}
exports.Shopify = Shopify;
