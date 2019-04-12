"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopify_payments_1 = require("./shopify-payments");
const access_1 = require("./access");
const analytics_1 = require("./analytics");
const billing_1 = require("./billing");
const customers_1 = require("./customers");
const discounts_1 = require("./discounts");
const events_1 = require("./events");
const inventory_1 = require("./inventory");
const marketing_event_1 = require("./marketing-event");
const metafield_1 = require("./metafield");
const online_store_1 = require("./online-store");
const orders_1 = require("./orders");
const products_1 = require("./products");
const store_properties_1 = require("./store-properties");
exports.default = {
    Balance: shopify_payments_1.Balance,
    Disputes: shopify_payments_1.Disputes,
    Payouts: shopify_payments_1.Payouts,
    Transactions: shopify_payments_1.Transactions,
    AccessScopes: access_1.AccessScopes,
    StorefrontAccessTokens: access_1.StorefrontAccessTokens,
    Reports: analytics_1.Reports,
    ApplicationCharges: billing_1.ApplicationCharges,
    ApplicationCredits: billing_1.ApplicationCredits,
    RecurringApplicationCharges: billing_1.RecurringApplicationCharges,
    Customers: customers_1.Customers,
    CustomerSavedSearches: customers_1.CustomerSavedSearches,
    PriceRules: discounts_1.PriceRules,
    Events: events_1.Events,
    Webhooks: events_1.Webhooks,
    InventoryItems: inventory_1.InventoryItems,
    InventoryLevels: inventory_1.InventoryLevels,
    Locations: inventory_1.Locations,
    MarketingEvents: marketing_event_1.MarketingEvents,
    Metafields: metafield_1.Metafields,
    Articles: online_store_1.Articles,
    Blogs: online_store_1.Blogs,
    Comments: online_store_1.Comments,
    Pages: online_store_1.Pages,
    Redirects: online_store_1.Redirects,
    ScriptTags: online_store_1.ScriptTags,
    Themes: online_store_1.Themes,
    Orders: orders_1.Orders,
    Checkouts: orders_1.Checkouts,
    DraftOrders: orders_1.DraftOrders,
    Products: products_1.Products,
    Collects: products_1.Collects,
    CustomCollections: products_1.CustomCollections,
    SmartCollections: products_1.SmartCollections,
    Shop: store_properties_1.Shop,
    Country: store_properties_1.Country,
    ShippingZone: store_properties_1.ShippingZone,
    Currency: store_properties_1.Currency,
    Policy: store_properties_1.Policy,
};
