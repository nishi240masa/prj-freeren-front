'use client';

import { Box, Link, Typography } from '@mui/material';
import Footer from '@/app/_components/Footer';

export default function Page() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(45deg, #003366, #004488, #001233)',
      }}
    >
      {/* モード選択コンテンツ */}
      <Box
        sx={{
          pt: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          color: 'white',
          gap: { xs: 0, sm: 10 },
        }}
      >
        {/* タイトル */}
        <Typography
          sx={{
            fontSize: '4rem',
            fontFamily: "'Cinzel Decorative', serif",
            textShadow: '0px 0px 20px rgba(0, 123, 255, 1)',
            color: '#69bff8',
          }}
          variant="h1"
        >
          mode select
        </Typography>

        {/* モード選択パネル */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            maxWidth: '1200px',
          }}
        >
          {[
            { mode: 'solo', text: 'ソロプレイ', bgColor: '#b0e0e6' },
            { mode: 'battle', text: '対戦モード', bgColor: '#87cefa' },
            { mode: 'start', text: '終了', bgColor: '#4682b4' },
          ].map((item) => (
            <Link
              key={item.mode}
              href={`/${item.mode}`}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '300px',
                height: '150px',
                background: `linear-gradient(145deg, ${item.bgColor}, ${item.bgColor}cc)`,
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderRadius: '15px',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'scale(1.08) rotate(-1deg)',
                  boxShadow: '0px 12px 20px rgba(0, 123, 255, 0.8)',
                },
              }}
            >
              {item.text}
            </Link>
          ))}
        </Box>
      </Box>
      {/* フッター */}
      <Footer />
    </Box>
  );
}
