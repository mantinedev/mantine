import React from 'react';
import { Text, Box, Spoiler, SpoilerProps } from '@mantine/core';

const content = (
  <div>
    <Box
      component="img"
      sx={{
        maxWidth: '100%',
        height: 150,
        marginLeft: 20,
        marginBottom: 0,
        marginTop: 5,
        float: 'right',
      }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rock_in_caputh-WBTBWB-47.jpg/600px-Rock_in_caputh-WBTBWB-47.jpg"
      alt="We Butter the Bread with Butter"
    />
    <Text>
      We Butter the Bread with Butter was founded in 2007 by Marcel Neumann, who was originally
      guitarist for Martin Kesici&apos;s band, and Tobias Schultka. The band was originally meant as
      a joke, but progressed into being a more serious musical duo. The name for the band has no
      particular meaning, although its origins were suggested from when the two original members
      were driving in a car operated by Marcel Neumann and an accident almost occurred. Neumann
      found Schultka &quot;so funny that he briefly lost control of the vehicle.&quot; Many of their
      songs from this point were covers of German folk tales and nursery rhymes.
    </Text>
  </div>
);

export function Wrapper(props: Partial<SpoilerProps>) {
  return (
    <div style={{ maxWidth: 520, margin: 'auto' }}>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" {...props}>
        {content}
      </Spoiler>
    </div>
  );
}
