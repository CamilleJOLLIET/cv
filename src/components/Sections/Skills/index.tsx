import {FC, memo} from 'react';

import {SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import SkillsSection from './SkillsSection';
import { SkillGroup } from './Skills';

const Skills: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 px-4 py-16 md:py-24 lg:px-8" sectionId={SectionId.Skills}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <SkillsSection title="Compétences">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </SkillsSection>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
