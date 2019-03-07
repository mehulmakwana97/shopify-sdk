export interface Config {
    shopName: string;
    accessToken?: string;
    apiKey?: string;
    password?: string;
}
export declare class Shopify {
    config: any;
    static buildConfig(options: Config): Shopify;
    constructor();
    balance(): import("./api/shopify-payments/Balance").Balance;
    dispute(id?: string): import("./api/shopify-payments/Disputes").Disputes;
    payout(id?: string): import("./api/shopify-payments/Payouts").Payouts;
    transaction(): import("./api/shopify-payments/Transactions").Transactions;
    accessScope(): import("./api/access/AccessScopes").AccessScopes;
    storefrontAccessToken(id?: string): import("./api/access/StorefrontAccessTokens").StorefrontAccessTokens;
    report(id?: string): import("./api/analytics/Reports").Reports;
    applicationCharge(id?: string): import("./api/billing/ApplicationCharges").ApplicationCharges;
    applicationCredit(id?: string): import("./api/billing/ApplicationCredits").ApplicationCredits;
    recurringApplicationCharge(id?: string): import("./api/billing/RecurringApplicationCharges").RecurringApplicationCharges;
    customer(id?: string): import("./api/customers/Customers").Customers;
    customerSavedSearch(id?: string): import("./api/customers/CustomerSavedSearches").CustomerSavedSearches;
    priceRule(id?: string): import("./api/discounts/PriceRules").PriceRules;
    event(id?: string): import("./api/Events/Events").Events;
    webhook(id?: string): import("./api/Events/Webhooks").Webhooks;
    inventoryItem(id?: string): import("./api/inventory/InventoryItems").InventoryItems;
    inventoryLevel(id?: string): import("./api/inventory/InventoryLevels").InventoryLevels;
    location(id?: string): import("./api/inventory/Locations").Locations;
    marketingEvent(id?: string): import("./api/marketing-event/MarketingEvents").MarketingEvents;
    metafield(id?: string): import("./api/metafield/Metafields").Metafields;
    article(): import("./api/online-store/Articles").Articles;
    blog(id?: string): import("./api/online-store/Blogs").Blogs;
    comment(id?: string): import("./api/online-store/Comments").Comments;
    page(id?: string): import("./api/online-store/Pages").Pages;
    redirect(id?: string): import("./api/online-store/Redirects").Redirects;
    scriptTag(id?: string): import("./api/online-store/ScriptTags").ScriptTags;
    theme(id?: string): import("./api/online-store/Themes").Themes;
    order(id?: string): import("./api/orders/Orders").Orders;
    checkout(): import("./api/orders/Checkouts").Checkouts;
    draftOrder(id?: string): import("./api/orders/DraftOrders").DraftOrders;
    product(id?: string): import("./api/products/Products").Products;
    collect(id?: string): import("./api/products/Collects").Collects;
    customCollection(id?: string): import("./api/products/CustomCollections").CustomCollections;
    smartCollection(id?: string): import("./api/products/SmartCollections").SmartCollections;
}
