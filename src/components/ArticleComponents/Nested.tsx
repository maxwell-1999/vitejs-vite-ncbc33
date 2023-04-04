import React from 'react';
import { Trans } from '@lingui/macro';

export const Nested = () => {
  return (
    <>
      <a href="https://google.com">link</a>
      <p>some paragraphh</p>
      <Trans>translated string</Trans>
    </>
  );
};
// export default Nested;
