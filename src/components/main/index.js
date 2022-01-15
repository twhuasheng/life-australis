import { FormContent } from '../form/form';
import { FeatureCarousel } from './carousel';
import { Specialities } from './specialities';
import { Introduction } from './introduction';
import { Experts } from './experts';
import { Notice } from './notice';

export function Main() {
  return (
    <div>
      <Notice />
      <FeatureCarousel />
      <Introduction />
      <Experts />
      <Specialities />
      <FormContent />
    </div>
  );
}
