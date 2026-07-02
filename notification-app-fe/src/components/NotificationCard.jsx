import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={700}>
              {notification.title}
            </Typography>

            <Chip
              label={notification.type}
              size="small"
              color={notification.type === "unread" ? "primary" : "default"}
            />
          </Stack>

          <Typography color="text.secondary">
            {notification.message}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}