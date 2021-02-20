import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { AuthenticationForm } from '@mantine/demos';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Modal } from './Modal';

function WrappedModal(props: Omit<React.ComponentProps<typeof Modal>, 'opened' | 'onClose'>) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
}

storiesOf('@mantine/core', module).add('Modal', () => (
  <MantineProvider>
    <WrappedModal title="Confirm your action">
      <AuthenticationForm />
    </WrappedModal>

    <WrappedModal title="Long content modal">
      <Text>Modal with scroll</Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nostrum voluptatum cumque
        sint, exercitationem autem? Illo saepe labore nesciunt accusamus nobis vitae minus expedita
        eum possimus commodi. Labore repudiandae rerum repellendus dolorem, est error dolor facere
        eum perspiciatis, tempora deserunt commodi facilis consequuntur! Amet similique placeat
        sequi aspernatur magni voluptatem reiciendis, laborum aliquam quod voluptas magnam quia
        beatae officiis quis deleniti, quaerat sit. Molestias autem asperiores perferendis esse quod
        ratione, non sequi cumque. Asperiores vel architecto, reprehenderit quibusdam voluptas
        excepturi voluptatum consequatur quasi inventore enim deleniti quia sunt. Nesciunt,
        blanditiis et! Nulla quis explicabo tempora optio? Maxime ipsum optio repudiandae, adipisci
        hic consequatur quod pariatur nisi vero at possimus porro, cumque eveniet facere. Officiis
        aspernatur fugit minima magnam blanditiis eligendi iure esse, odit, ab vitae nulla? Dolore
        accusantium eius reprehenderit explicabo necessitatibus nobis facere similique repudiandae,
        et tenetur voluptatum inventore sunt obcaecati ab id culpa porro, fugit animi placeat natus
        nihil totam minus voluptatem facilis. Dolorem in accusamus accusantium molestias deleniti
        consequatur earum blanditiis, dignissimos quam delectus pariatur sint velit natus
        voluptatibus exercitationem voluptas doloribus tenetur fugiat incidunt quos totam enim
        minima. Repellat, cum dicta. At porro illo exercitationem repudiandae consectetur obcaecati
        repellat odit, quam ex quaerat aperiam sunt, voluptas tempore natus quo quasi doloribus
        perspiciatis reprehenderit explicabo facere voluptatibus error? Minus earum provident quos
        exercitationem, eveniet eos dicta ex sint nam corrupti libero non! Vero quo omnis
        necessitatibus voluptatem culpa quisquam, voluptatibus quam unde, illo aperiam consequatur!
        Nobis aliquam eum vero nihil est provident, quisquam cupiditate. Veritatis, non in illum,
        molestiae amet animi soluta, quis magnam corporis repellendus quisquam adipisci aperiam.
        Quia repudiandae laudantium sit quam atque, nemo nulla repellendus enim magni libero quod
        labore culpa mollitia assumenda cumque voluptates vero maxime. Possimus dolorem recusandae
        excepturi fugit esse saepe natus labore mollitia est repudiandae cumque quisquam quibusdam
        debitis quaerat ab officiis cupiditate sequi, iste eligendi. Similique, quo, pariatur
        eligendi accusamus vel eum enim inventore dolores accusantium facilis quod iure repellat
        incidunt aliquid eos. Nobis laborum mollitia reprehenderit cupiditate sunt quidem soluta
        nisi a fuga quibusdam perspiciatis ullam, vitae sit, reiciendis voluptas? Magnam atque dolor
        fuga esse doloremque nemo quos quam iure repellendus placeat modi distinctio ea laborum
        minima, hic magni vitae! Quam laudantium sequi natus perferendis placeat nostrum
        exercitationem rerum minus illum quaerat pariatur reiciendis eos enim eaque distinctio,
        nihil hic id necessitatibus ducimus, quo similique. Repudiandae sed quidem, asperiores natus
        corporis neque illo odit provident consequuntur laborum et, aliquid, earum sequi nam facilis
        ad sapiente obcaecati. Praesentium odit animi nisi inventore culpa porro maxime eius at sed
        iure voluptates, quis vero aperiam amet, optio maiores est tenetur, dolore doloribus neque
        ut iusto fugiat laudantium! Cum est modi rem animi aut illum nihil minima molestiae, in vel
        possimus, a, eaque dolores? Eaque corrupti dolore at voluptatem sint numquam maxime? Autem
        nostrum facilis aspernatur facere veritatis, corporis rerum incidunt animi impedit unde
        veniam nihil aliquam ratione aut quasi distinctio est quod magni natus aliquid maxime.
        Similique magni ad fugit dolorem veniam assumenda omnis, cum vel nemo nam esse odio, tenetur
        ipsum! Possimus, distinctio praesentium molestiae quia, iure quidem quae id autem,
        architecto necessitatibus provident tempore sapiente! Odit hic quia vero amet non voluptate
        minus sint aperiam omnis reprehenderit! Vitae harum dolore illum assumenda eos, error
        nesciunt, voluptatem sed sint, velit perspiciatis commodi excepturi ducimus dolores possimus
        unde! Sint ipsum molestias dignissimos, minima illum esse ducimus autem assumenda pariatur.
        Adipisci perspiciatis molestiae modi. Sunt nostrum dignissimos, doloremque commodi
        laudantium molestias repudiandae optio reiciendis, nisi beatae esse! Facere aut eos placeat
        blanditiis labore eum, explicabo laudantium eveniet, esse possimus non voluptatem voluptas
        veniam ipsum libero fuga dolor dolore nesciunt rerum, expedita id? Harum minima repudiandae
        amet cumque dicta fuga cupiditate maxime labore animi ipsa, voluptatibus laboriosam nobis
        quasi ea molestiae quidem fugit inventore corporis a! Optio aspernatur, natus ab suscipit
        consectetur praesentium qui dolore hic voluptatibus. Impedit reprehenderit eum quaerat,
        eaque accusantium blanditiis sint repellat, vero voluptatem, ipsam a tenetur rem magnam?
        Aliquid repudiandae ipsa facilis voluptas numquam eligendi pariatur dolore optio nam sed non
        facere accusantium ab sint est aliquam nesciunt dolores in voluptatum, perspiciatis esse
        libero voluptatem quia. Libero earum, expedita vitae fugiat nobis suscipit amet dicta.
        Perferendis nulla, quod voluptatum nostrum sapiente, asperiores quasi fugit voluptatem
        ducimus quibusdam amet doloremque natus in fugiat iusto, placeat laboriosam mollitia veniam
        voluptatibus sunt libero dolores quos quis. Dolorum labore explicabo sequi corporis libero
        provident illo velit at officiis recusandae quia, rem et reprehenderit blanditiis,
        dignissimos enim quo nostrum voluptatem porro, necessitatibus quam obcaecati consequuntur
        perferendis maiores. Perspiciatis blanditiis dolorum inventore distinctio numquam officia
        asperiores ratione at cumque soluta? Culpa voluptatum, quae optio sequi voluptas quod
        laudantium ratione tempore officia impedit at quidem veritatis! Laboriosam, dignissimos quas
        nisi modi illum totam, deleniti iste ipsa, tenetur at tempora! Dolorum ratione accusantium
        provident. Consequuntur aliquam incidunt blanditiis distinctio minus, nesciunt obcaecati
        quod quas aliquid. Mollitia quod esse ipsam nesciunt, eos pariatur accusantium possimus
        quasi doloribus quia cupiditate exercitationem illum saepe quos voluptatibus veniam minima?
        Aspernatur, accusantium expedita dignissimos quod illo quae. Incidunt odio voluptatibus
        officiis harum corporis nemo illum tenetur dolore odit perspiciatis modi nisi voluptatum
        rem, quidem culpa fuga aperiam est tempora aliquam. Veritatis voluptate eum minima impedit
        sapiente excepturi minus repellendus, sequi qui perspiciatis iure beatae cumque quam.
        Quibusdam error id velit expedita repellendus! Quisquam expedita quidem explicabo quae,
        dolorem soluta totam aperiam. Ex dolore praesentium corrupti totam. Dolorum voluptas ratione
        rerum qui impedit error deserunt, quo labore ducimus! Dolorum odio facere repellendus in
        dolor excepturi dicta eius iste! Necessitatibus officiis pariatur quibusdam voluptates
        ullam. Sapiente, suscipit harum modi dolorem corporis quos maxime molestias et dolores nisi
        doloremque dignissimos assumenda, eveniet mollitia laboriosam illum deleniti ut ipsa alias
        quia exercitationem. Nostrum provident corrupti adipisci obcaecati perspiciatis enim
        pariatur qui omnis molestiae cupiditate cum quidem error, voluptas optio, ratione ipsa
        exercitationem earum odio? Soluta atque impedit nihil amet maiores provident possimus
        aperiam, ullam praesentium ab nesciunt fugiat illum esse sed, ad explicabo mollitia
        blanditiis perspiciatis unde consequuntur necessitatibus commodi aspernatur! Est laborum
        sit, dicta tempore maiores ullam a fuga, praesentium beatae et itaque. Iusto?
      </Text>
    </WrappedModal>
  </MantineProvider>
));
