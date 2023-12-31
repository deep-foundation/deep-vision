import React, { useEffect, useMemo, useState } from 'react';
import { Button, Stack, ChakraProvider } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Vision = dynamic(() => import('../imports/aframe/vision'), { ssr: false })
const R3F = dynamic(() => import('../imports/r3f-dynamic-html/dynamic-texture'), { ssr: false })

export default function Page() {
  return (
    <ChakraProvider>
      <Vision />
    </ChakraProvider>
  );
}
