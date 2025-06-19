
'use client';
import React from 'react';
import Link from "next/link";
import { Title } from '@mantine/core';

export default function Home() {

  return (
    <div>
      <article>
        <Title order={1}>
          Nossa&nbsp;
          <span>Natureza</span>
          &nbsp;é Tecnologica
        </Title>
        <Title order={3} mt={20}>Capao Lab é uma Tech Startup sediado no Vale do Capão, leia nosso manifesto.</Title>
        <Link href='/hub/manifest'>Manifesto</Link>
      </article>
    </div>
  );
}
