import path from 'path';
import fs from 'fs-extra';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';

const logger = createLogger('fetch-sponsors');

interface Sponsor {
  name: string;
  image: string;
  url: string;
  monthlyDonation: number;
  totalDonations: number;
}

const docgenPath = getPath('apps/mantine.dev/src/.docgen');

async function fetchSponsors() {
  const response = await fetch('https://opencollective.com/mantinedev/members/all.json');

  const data = await response.json();

  const sponsors = data
    .filter((item: any) => item.role === 'BACKER' && item.tier === 'sponsor')
    .map((sponsor: any) => ({
      name: sponsor.name,
      image: sponsor.image,
      url: sponsor.website || sponsor.profile,
      monthlyDonation: sponsor.monthlyDonation / 100,
      totalDonations: sponsor.totalAmountDonated / 100,
    }))
    .sort((a: Sponsor, b: Sponsor) => b.monthlyDonation - a.monthlyDonation);

  await fs.ensureDir(docgenPath);
  await fs.writeJson(path.join(docgenPath, 'sponsors.json'), sponsors);

  logger.info(`✅ Saved ${sponsors.length} sponsors to sponsors.json`);
}

fetchSponsors().catch((error) => {
  logger.error('Failed to fetch sponsors:', error);
  process.exit(1);
});
