import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

interface Props {
  handleChange: (event: any) => void;
  player: string;
  handleClick: () => void;
}

export default function SelectPlayer({ handleChange, player, handleClick }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(battle.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Card
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          maxWidth: 300,
        }}
      >
        <Typography component="h2" sx={{ textAlign: 'center', marginBottom: 3, color: 'black' }} variant="h5">
          プレイヤー選択
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="player-select-label" sx={{ color: 'black' }}>
            プレイヤー
          </InputLabel>
          <Select
            id="player-select"
            label="プレイヤー"
            labelId="player-select-label"
            onChange={handleChange}
            sx={{ color: 'black' }}
            value={player}
          >
            <MenuItem value="">
              <em>選択してください</em>
            </MenuItem>
            <MenuItem value="player1">Player 1</MenuItem>
            <MenuItem value="player2">Player 2</MenuItem>
          </Select>
          <FormHelperText sx={{ color: 'black' }}>ゲームで操作するプレイヤーを選択してください</FormHelperText>
        </FormControl>

        {/* 決定ボタン */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            color="primary"
            fullWidth
            onClick={() => {
              handleClick();
            }}
            size="large"
            variant="contained"
          >
            決定
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
