import React from 'react';
import { Trans } from '@lingui/macro';
import { Nested } from './ArticleComponents/Nested';

export const Article = () => {
  return (
    <p>
      my string
      <Trans>new string</Trans>
      <Nested />
      <p>123</p>
    </p>
  );
};

export default Article;
