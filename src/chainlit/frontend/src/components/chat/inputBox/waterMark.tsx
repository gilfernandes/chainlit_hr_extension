import { Stack, Typography } from '@mui/material';

import { Logo } from 'components/logo';

export default function WaterMark() {
  return (
    <Stack mx="auto">
      <a
        href="https://onepointltd.com/"
        target="_blank"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <Typography fontSize="12px" color="text.secondary">
          Aishu HR by
        </Typography>
        <Logo
          width={65}
          style={{ filter: 'grayscale(1)', marginLeft: '4px' }}
        />
      </a>
    </Stack>
  );
}
