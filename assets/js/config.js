/*
 * SOBHA ParQ City (Hennur, Bengaluru) landing page: deployment configuration.
 * Everything that differs between preview and production lives here.
 * Nothing secret belongs in this file: it is shipped to the browser.
 */
window.SH_CONFIG = {
  /* Lead delivery. POST target that accepts the lead and returns 2xx on success
   * (Pabbly / Zapier / Make webhook, Google Apps Script, Leadrat proxy).
   * Empty until a real endpoint exists: the form then refuses to submit
   * instead of showing a fake success message. */
  leadEndpoint: "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjUwNTY1MDYzNTA0MzY1MjZjNTUzNyI_3D_pc/IjU3NjcwNTZiMDYzMjA0MzU1MjZmNTUzNjUxMzQi_pc",

  /* "form" = URL-encoded POST without a CORS preflight (right for Pabbly / Zapier / Make webhooks).
   * "json" = JSON POST (for your own endpoint that answers CORS). */
  leadEndpointMode: "form",
  leadEndpointSimpleRequest: false,

  /* Redirect here after a confirmed submission. Empty = inline success message. */
  thankYouUrl: "thank-you.html",

  /* Google Tag Manager container, e.g. "GTM-XXXXXXX". Loaded only when set. */
  gtmId: "",

  /* Sales / channel-partner number. Call buttons stay hidden until both are set.
   * Example: phoneDisplay "98765 43210", phoneE164 "+919876543210". */
  phoneDisplay: "76766 65738",
  phoneE164: "+917676665738",

  /* WhatsApp number, digits only with country code (e.g. "919876543210"). WhatsApp buttons stay hidden until set. */
  whatsappNumber: "917676665738",
  whatsappMessage: "Hi, I'm interested in SOBHA ParQ City, Bengaluru. Please share the price sheet, floor plans and EOI details.",

  /* Auto-open the enquiry popup once per session, on whichever comes first:
   * this many seconds on the page, this far down the page, or the mouse leaving the top of the window.
   * Set a value to 0 / false to switch that trigger off. */
  popupDelaySeconds: 30,
  popupScrollPercent: 50,
  popupExitIntent: true,

  /* Optional public brochure URL, shown after a successful "Download Brochure" enquiry. */
  brochureUrl: "",

  /* Channel-partner K-RERA agent registration, shown in the footer when set. */
  agentRera: "PRM/KA/RERA/1251/446/AG/210729/002406",

  /* Named in the consent line: who will contact the enquirer. Confirm before launch. */
  consentEntity: "Sobha Limited and its authorised channel partners",

  siteUrl: "https://www.sobhaparqcityhennur.in/",
  privacyUrl: ""
};
