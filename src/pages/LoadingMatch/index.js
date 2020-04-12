import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Column,
  PhotoCard
} from './styles';

export default function LoadingMatch() {

  return (
    <Container>
      <Column style={{ alignItems: 'center' }}>
          <PhotoCard></PhotoCard>
          <strong style={{ fontSize: '2em' }}>Adicionar foto</strong>
        </Column>
    </Container>
  );
}
