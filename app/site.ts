const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kailing-li-research-portfolio.teachertom.chatgpt.site";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const homeUrl = `${siteUrl}/`;