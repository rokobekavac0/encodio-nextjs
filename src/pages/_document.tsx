// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

// Required for @emotion/css
import { extractCritical } from "@emotion/server";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <style data-emotion-css={(this.props as any).ids.join(" ")} dangerouslySetInnerHTML={{ __html: (this.props as any).css }} />
        </Head>
        <body style={{ backgroundColor: "black" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
