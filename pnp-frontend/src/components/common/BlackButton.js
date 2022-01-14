import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import palette from '../../lib/palette';

const BlackStyledButton = (props) => (
  <button
    css={css`
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.25rem 1rem;
      color: white;
      outline: none;
      cursor: pointer;

      @media (max-width: 770px), (max-height: 770px) {
        /* tablet */
        font-size: 1rem;
        padding: 0.1875rem 0.75rem;
      }

      @media (max-width: 425px), (max-height: 425px) {
        /* mobile */
        font-size: 0.75rem;
        padding: 0.125rem 0.5rem;
      }

      background: ${palette.gray[8]};
      &:hover {
        background: ${palette.gray[6]};
      }

      :focus {
        border: 2px solid ${palette.Blue[4]};
      }
    `}
    {...props}
  />
);

const BlackButton = (props) => {
  return <BlackStyledButton {...props} />;
};

export default BlackButton;
