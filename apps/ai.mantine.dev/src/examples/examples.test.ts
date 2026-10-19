import { SKILLS } from '@/skills-data';
import { getExampleFolders, toExampleId } from './routes';
import { EXAMPLES } from './index';

describe('examples registry', () => {
  it.each(SKILLS.map((skill) => skill.id))('%s folders match registry ids', (skillId) => {
    const folderIds = getExampleFolders(skillId).map(toExampleId);
    const registryIds = EXAMPLES[skillId].map((example) => example.id);

    expect([...registryIds].sort()).toEqual(folderIds);
  });

  it('converts folder names to ids', () => {
    expect(toExampleId('JobApplicationForm')).toBe('job-application-form');
    expect(toExampleId('OTPForm')).toBe('otp-form');
    expect(toExampleId('Invoice')).toBe('invoice');
  });
});
