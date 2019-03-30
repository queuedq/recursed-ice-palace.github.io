import React from 'react'
import { palette } from '../config';

export default ({ children }) => (
  <section className="qna">
    {children}
    <style jsx>{`
      .qna :global(dt) {
        position: relative;
        margin: 32px 0 16px 0;
        padding-left: 32px;
        font-size: 24px;
        color: ${palette.black};
      }
      .qna :global(dt)::before {
        content: 'Q. ';
        position: absolute;
        left: 0px;
        color: ${palette.ice.dark};
      }
      .qna :global(dd) > :global(.short-answer) {
        position: relative;
        margin-left: -32px;
        padding-left: 32px;
        color: ${palette.black};
      }
      .qna :global(dd) :global(.short-answer)::before {
        content: 'A. ';
        position: absolute;
        left: 0px;
        color: ${palette.ice.dark};
      }
      .qna :global(dd) {
        padding-left: 32px;
      }
    `}</style>
  </section>
)
