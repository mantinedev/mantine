import fs from 'fs';
import fetch from 'node-fetch';
import { getPath } from '../utils/get-path';

const SLUG = 'mantinedev';
const OUTPUT_FILE = getPath('README.md');

async function updateBackers() {
  const query = `
    query {
      collective(slug: "${SLUG}") {
        members(role: BACKER) {
          nodes {
            account {
              name
              imageUrl
              website
            }
          }
        }
      }
    }
  `;
  const response = await fetch('https://api.opencollective.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const data: any = await response.json();

  const backers = data.data.collective.members.nodes
    .map((backer: any) => `![${backer.account.name}](${backer.account.imageUrl})`)
    .join(' ');

  let readme = fs.readFileSync(OUTPUT_FILE, 'utf8');
  readme = readme.replace(
    /<!-- START BACKERS -->[\s\S]*<!-- END BACKERS -->/,
    `<!-- START BACKERS -->\n${backers}\n<!-- END BACKERS -->`
  );
  fs.writeFileSync(OUTPUT_FILE, readme);
}

updateBackers();
