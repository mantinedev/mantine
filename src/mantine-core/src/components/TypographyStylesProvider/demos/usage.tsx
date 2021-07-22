import React from 'react';
import { TypographyStylesProvider } from '../TypographyStylesProvider';

const html = `
<h1>We Butter the Bread with Butter</h1>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rock_in_caputh-WBTBWB-47.jpg/1920px-Rock_in_caputh-WBTBWB-47.jpg" alt="WBTBWB at Rock in Caputh 2013"/>

<p><b>We Butter the Bread with Butter</b> (also known as <b>WBTBWB</b>) is a German <a href="https://en.wikipedia.org/wiki/Deathcore" title="Deathcore">deathcore</a> band noted for their heavy use of <a href="https://en.wikipedia.org/wiki/Electronic_music" title="Electronic music">electronic music</a> characteristics.<sup id="cite_ref-newsflash_1-0" class="reference"><a href="#cite_note-newsflash-1">[1]</a></sup><sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup> The group was founded in 2007 by Marcel Neumann, was signed to Redfield Records and have released two albums through the label. Their debut album <i><a href="https://en.wikipedia.org/wiki/Das_Monster_aus_dem_Schrank" title="Das Monster aus dem Schrank">Das Monster aus dem Schrank</a></i> was released on November 21, 2008.<sup id="cite_ref-WBTBWB_at_redfield-records.de_3-0" class="reference"><a href="#cite_note-WBTBWB_at_redfield-records.de-3">[3]</a></sup> Their second album, <i><a href="https://en.wikipedia.org/wiki/Der_Tag_an_dem_die_Welt_unterging" title="Der Tag an dem die Welt unterging">Der Tag an dem die Welt unterging</a></i> was released May 14, 2010, followed on December 19, 2012 by an EP titled <i><a href="https://en.wikipedia.org/wiki/Projekt_Herz" title="Projekt Herz">Projekt Herz</a></i>. Their third studio album, <i><a href="https://en.wikipedia.org/wiki/Goldkinder" title="Goldkinder">Goldkinder</a></i>, was released on August 9, 2013, and a fourth album, <i><a href="https://en.wikipedia.org/wiki/Wieder_geil!" title="Wieder geil!">Wieder geil!</a></i>, was released on May 22, 2015.</p>

<h2>History</h2>
<p>We Butter the Bread with Butter was founded in 2007 by Marcel Neumann, who was originally  guitarist for <a href="https://en.wikipedia.org/wiki/Martin_Kesici" title="Martin Kesici">Martin Kesici</a>'s band,<sup id="cite_ref-smash-mag_4-0" class="reference"><a href="#cite_note-smash-mag-4">[4]</a></sup> and Tobias Schultka. The band was originally meant as a joke, but progressed into being a more serious musical duo. The name for the band has no particular meaning, although its origins were suggested from when the two original members were driving in a car operated by Marcel Neumann and an accident almost occurred. Neumann found Schultka "so funny that he briefly lost control of the vehicle."<sup id="cite_ref-smash-mag_4-1" class="reference"><a href="#cite_note-smash-mag-4">[4]</a></sup> Many of their songs from this point were <a href="https://en.wikipedia.org/wiki/Cover_(music)" class="mw-redirect" title="Cover (music)">covers</a> of <a href="https://en.wikipedia.org/wiki/German_folklore" title="German folklore">German folk tales</a> and <a href="https://en.wikipedia.org/wiki/Nursery_rhyme" title="Nursery rhyme">nursery rhymes</a>.<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup></p>

<h3>Dates</h3>
<ul><li>On June 28, 2012, Kenneth Duncan announced his departure from the band via his personal Facebook page, citing creative and personal differences.</li><li>On October 28, 2012 the band posted a video on YouTube called We Butter the Bread with Butter - New EP and Album Trailer. The video says that the EP will come out in 2012 and new album will come out on April 12, 2013. The day after the band Posted a picture of the album art for Projekt Herz EP on Facebook.</li><li>On November 11, 2012 the band posted one of the new songs from their new EP on Facebook. The song name is USA. On December 19, 2012 the band released an EP titled Projekt Herz.</li><li>On February 17, 2013 the band posted a video on YouTube announcing the release date of their upcoming album - August 9, 2013 On April 21, 2013 the band revealed via Facebook the cover and the name of the third album, Goldkinder, which will be released on August 9, 2013.</li></ul>
`;

const code = `import React from 'react';
import { TypographyStylesProvider } from '@mantine/core';

function Demo() {
  return <TypographyStylesProvider dangerouslySetInnerHTML={{ __html: html }} />;
}`;

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
