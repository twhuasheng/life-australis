import { Container } from '../container';
import { ContentBlock } from '../content-block';

const placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Phasellus cursus facilisis neque. Vestibulum volutpat venenatis ligula, eu dapibus 
turpis vehicula sagittis. Nam eu auctor risus. Nulla blandit, nisi eu pulvinar pharetra, 
est justo sollicitudin nulla, a viverra diam orci nec urna. Etiam ornare ex vulputate risus 
euismod cursus. Phasellus porttitor nulla eleifend magna accumsan, a tincidunt ante cursus. 
Integer et ipsum eleifend, auctor lacus nec, interdum eros. Quisque lacinia sem at magna sagittis, 
quis iaculis nisi accumsan. Duis semper lorem ligula, sed interdum ligula interdum gravida. Proin 
luctus posuere risus at sollicitudin. Donec nec lacinia felis. Phasellus vitae turpis sit amet arcu 
pharetra consectetur.

`;

export function Introduction() {
  return (
    <Container>
      <ContentBlock text={placeholder} />
    </Container>
  );
}
