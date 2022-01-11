import { FormContent } from '../form/form';
import { FeatureCarousel } from './carousel';
import { Specialities } from './specialities';
import { Introduction } from './introduction';
import { Experts } from './experts';

export function Main() {
  return (
    <div>
      <FeatureCarousel />
      <Introduction />
      <Experts />
      <Specialities />
      <FormContent />
    </div>
  );
}
