/** Number of body characters kept in a section snippet for the search index */
export const SNIPPET_LENGTH = 300;

/** A single `##` section of a documentation page */
export interface DocSection {
  heading: string;
  slug: string;
  body: string;
}

/** Converts a heading to a stable, URL-safe section identifier */
export function sectionSlug(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/`/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const FENCE_MARKER_REGEX = /^\s*(`{3,}|~{3,})/;

/** Splits a markdown document into its intro and `##` sections, ignoring fenced code blocks */
export function splitSections(markdown: string): { intro: string; sections: DocSection[] } {
  const lines = markdown.split('\n');
  const introLines: string[] = [];
  const sections: DocSection[] = [];

  let current: { heading: string; body: string[] } | null = null;
  let fence: { char: string; length: number } | null = null;

  const flush = () => {
    if (current) {
      sections.push({
        heading: current.heading,
        slug: sectionSlug(current.heading),
        body: current.body.join('\n').trim(),
      });
    }
  };

  lines.forEach((line) => {
    const fenceMatch = FENCE_MARKER_REGEX.exec(line);

    if (fenceMatch) {
      const marker = fenceMatch[1];
      const char = marker[0];
      const length = marker.length;

      if (!fence) {
        fence = { char, length };
      } else if (char === fence.char && length >= fence.length) {
        fence = null;
      }
    }

    const headingMatch = !fence && /^## (.+)$/.exec(line);

    if (headingMatch) {
      flush();
      current = { heading: headingMatch[1].trim(), body: [] };
      return;
    }

    if (current) {
      current.body.push(line);
    } else {
      introLines.push(line);
    }
  });

  flush();

  return { intro: introLines.join('\n').trim(), sections };
}
