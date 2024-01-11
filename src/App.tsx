import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { MainPage, CardsPage } from './App/pages';

export function App() {
  return (
    <Box padding={'20px 0'} maxWidth={430} margin={'auto'}>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Box>
  );
}
