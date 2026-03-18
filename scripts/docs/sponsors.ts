import dayjs from 'dayjs';
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

  const thirtyOneDaysAgo = dayjs().subtract(31, 'day');

  const sponsors = data
    .filter((item: any) => {
      const isActiveSponsor = item.role === 'BACKER' && item.tier === 'sponsor';
      const hasRecentTransaction =
        item.lastTransactionAt && dayjs(item.lastTransactionAt).isAfter(thirtyOneDaysAgo);
      return isActiveSponsor && hasRecentTransaction;
    })
    .reduce((unique: Sponsor[], item: any) => {
      const sponsor: Sponsor = {
        name: item.name,
        image: item.image,
        url: item.website || item.profile,
        monthlyDonation: item.monthlyDonation / 100,
        totalDonations: item.totalAmountDonated / 100,
      };

      // Only add sponsor if name doesn't already exist or if it has an image when existing doesn't
      const existingIndex = unique.findIndex((s) => s.name === sponsor.name);
      if (existingIndex === -1) {
        unique.push(sponsor);
      } else {
        const existing = unique[existingIndex];
        // Prefer sponsor with image, or if both have images/no images, prefer higher monthly donation
        const shouldReplace =
          (sponsor.image && !existing.image) ||
          (!!sponsor.image === !!existing.image &&
            sponsor.monthlyDonation > existing.monthlyDonation);

        if (shouldReplace) {
          unique[existingIndex] = sponsor;
        }
      }

      return unique;
    }, [])
    .sort((a: Sponsor, b: Sponsor) => b.monthlyDonation - a.monthlyDonation);

  await fs.ensureDir(docgenPath);
  await fs.writeJson(path.join(docgenPath, 'sponsors.json'), sponsors);

  logger.info(`✅ Saved ${sponsors.length} sponsors to sponsors.json`);
}

fetchSponsors().catch((error) => {
  logger.error('Failed to fetch sponsors:', error);
  process.exit(1);
});
