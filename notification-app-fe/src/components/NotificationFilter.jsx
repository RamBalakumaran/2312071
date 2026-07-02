import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export function NotificationFilter({ value, onChange }) {
  const handleChange = (_, newValue) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChange} size="small">
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="unread">Unread</ToggleButton>
      <ToggleButton value="read">Read</ToggleButton>
    </ToggleButtonGroup>
  );
}