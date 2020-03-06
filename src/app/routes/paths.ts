const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const searchUrl = `${baseUrl}search/`;
export const categoryUrl = `${baseUrl}category/${slugUrl}`;
export const collectionUrl = `${baseUrl}collection/${slugUrl}`;
export const productUrl = `${baseUrl}product/${slugUrl}`;
export const cartUrl = `${baseUrl}cart/:token?/`;
export const checkoutLoginUrl = `${baseUrl}login/`;
export const pageUrl = `${baseUrl}page/:slug/`;
export const guestOrderDetailsUrl = `/order-history/:token/`;
export const orderConfirmationUrl = `${baseUrl}order-confirmation/`;
export const accountUrl = `${baseUrl}account/`;
export const accountConfirmUrl = `${baseUrl}account-confirm/`;
export const orderHistoryUrl = `${baseUrl}order-history/`;
export const addressBookUrl = `${baseUrl}address-book/`;
export const paymentOptionsUrl = `${baseUrl}payment-options/`;
export const passwordResetUrl = `${baseUrl}reset-password/`;

/* Custom Paths */
export const about = `${baseUrl}about/`;
export const faq = `${baseUrl}faq/`;
export const services = `${baseUrl}services/`;