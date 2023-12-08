import React, { useEffect, useMemo, useState } from 'react';
import { Button, Stack, ChakraProvider } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Vision = dynamic(() => import('../imports/vision'), { ssr: false })

export default function Page() {
  return (
    <ChakraProvider>
      <Vision />
    </ChakraProvider>
  );
}
