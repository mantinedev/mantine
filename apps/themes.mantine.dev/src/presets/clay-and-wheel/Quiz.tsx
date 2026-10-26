'use client';

import { useState } from 'react';
import { Button, Paper, Radio, Title } from '@mantine/core';
import { questions } from './data';
import classes from './Quiz.module.css';

type Answers = (string | null)[];

export function Quiz() {
  const [answers, setAnswers] = useState<Answers>(() => questions.map(() => null));
  const [checked, setChecked] = useState(false);
  const [incomplete, setIncomplete] = useState(false);

  const rightCount = questions.filter((q, index) => answers[index] === String(q.right)).length;

  const setAnswer = (index: number, value: string) => {
    setAnswers((current) => current.map((answer, i) => (i === index ? value : answer)));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (answers.some((answer) => answer === null)) {
      setIncomplete(true);
      return;
    }
    setIncomplete(false);
    setChecked(true);
  };

  const retry = () => {
    setAnswers(questions.map(() => null));
    setChecked(false);
  };

  const hint = checked
    ? rightCount === questions.length
      ? 'Nice work. You are ready for lesson 5.'
      : 'The correct answers are outlined in green.'
    : incomplete
      ? 'Pick an answer for every question first.'
      : 'Answer all three, then check.';

  return (
    <Paper component="section" aria-labelledby="clay-quiz-title">
      <div className={classes.head}>
        <div>
          <Title order={2} id="clay-quiz-title">
            Check your understanding
          </Title>
          <p className={classes.lead}>Three questions. You can try as many times as you like.</p>
        </div>
        {checked && (
          <div className={classes.score}>
            {rightCount} of {questions.length}
            <small>
              {rightCount === questions.length ? 'All correct' : 'Review the notes and try again'}
            </small>
          </div>
        )}
      </div>

      <form onSubmit={submit}>
        <ol className={classes.questions}>
          {questions.map((q, index) => {
            const answer = answers[index];
            const ok = answer === String(q.right);
            return (
              <li key={q.question}>
                <Radio.Group
                  label={`${index + 1}. ${q.question}`}
                  value={answer}
                  onChange={(value) => setAnswer(index, value)}
                >
                  <div className={classes.options}>
                    {q.answers.map((text, answerIndex) => {
                      const value = String(answerIndex);
                      const result = !checked
                        ? undefined
                        : answerIndex === q.right
                          ? 'right'
                          : answer === value
                            ? 'wrong'
                            : undefined;
                      return (
                        <Radio.Card
                          key={text}
                          value={value}
                          disabled={checked}
                          className={classes.option}
                          data-result={result}
                        >
                          <Radio.Indicator disabled={checked} className={classes.indicator} />
                          {text}
                        </Radio.Card>
                      );
                    })}
                  </div>
                </Radio.Group>
                {checked && (
                  <div className={classes.feedback} data-ok={ok || undefined}>
                    <span>
                      <b>{ok ? 'Correct.' : 'Not quite.'}</b> {q.why}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className={classes.foot}>
          <span className={classes.hint} data-error={(!checked && incomplete) || undefined}>
            {hint}
          </span>
          <div className={classes.actions}>
            {checked ? (
              <Button variant="default" onClick={retry}>
                Try again
              </Button>
            ) : (
              <Button type="submit">Check answers</Button>
            )}
          </div>
        </div>
      </form>
    </Paper>
  );
}
