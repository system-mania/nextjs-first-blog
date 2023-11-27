---
title: 'Pre-rendering'
date: '2023-11-26'
---

In Next.js, you can pre-render pages during build time or on-demand. Pre-rendering can help improve performance and SEO.

## Static Generation

Next.js supports Static Generation, which generates HTML at build time. This means that the HTML is generated once and reused for each request.

To use Static Generation, you can export a `getStaticProps` function in your page component. This function fetches data and returns it as props to the page.
