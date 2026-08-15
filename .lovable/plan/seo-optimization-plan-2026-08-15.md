---
name: SEO Optimization
description: Implement SEO best practices for the Nisado Baani luxury dental clinic website, including metadata, semantic HTML, and JSON-LD.
type: feature
---

# SEO Optimization Plan

Improve the search engine visibility of the Nisado Baani website by implementing structured metadata, optimizing semantic structure, and ensuring all SEO requirements are met.

## Technical Details

- **Route Metadata**: Implement the `head()` function in `src/routes/index.tsx` to include unique titles, descriptions, and OpenGraph/Twitter tags specific to the home page.
- **Semantic HTML**: Review and refine heading hierarchy (H1-H6) in `src/routes/index.tsx` to ensure proper document structure.
- **JSON-LD**: Add structured data (LocalBusiness/Dentist) to help search engines understand the clinic's locations (Polanco, Del Valle, Roma Sur) and services.
- **Image Optimization**: Ensure all images have descriptive `alt` tags (localized in Spanish).
- **Canonical Tags**: Add canonical URLs to avoid duplicate content issues.

## Steps

1. **Add Metadata to Index Route**: Define the `head` option for `src/routes/index.tsx` with optimized titles and descriptions.
2. **Audit Heading Structure**: Ensure there is only one `<h1>` (the hero title) and that other sections use `<h2>` and `<h3>` appropriately.
3. **Implement JSON-LD**: Add a script tag in the `head` or component for schema.org structured data.
4. **Alt Text Review**: Scan all images in `src/routes/index.tsx` and ensure meaningful `alt` text is present.
5. **Add Canonical URL**: Ensure the `head` includes a canonical link pointing to the primary domain.
