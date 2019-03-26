import React from 'react'
import { palette } from '../config';

const parseSingleQuestion = ([question, shortAnswer, longAnswer], index) => (
  <React.Fragment key={index}>
    <dt>{question}</dt>
    <dd>
      <p className="short-answer">{shortAnswer}</p>
      <p>{longAnswer}</p>
    </dd>
  </React.Fragment>
)

const parseQuestions = (questions) => questions.map(parseSingleQuestion)

export default ({ contents }) => (
  <section className="qna">
    {parseQuestions(contents)}
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
      .qna :global(dd) :global(.short-answer) {
        position: relative;
        padding-left: 32px;
        color: ${palette.black};
      }
      .qna :global(dd) :global(.short-answer)::before {
        content: 'A. ';
        position: absolute;
        left: 0px;
        color: ${palette.ice.dark};
      }
      .qna :global(dd) :global(p) {
        padding-left: 32px;
      }
    `}</style>
  </section>
)
