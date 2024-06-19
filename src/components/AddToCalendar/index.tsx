import {
  Button,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  SvgIcon,
} from "@mui/material";
import React from "react";

interface Props {
  anchorEl: null | HTMLElement;
  onClose: () => void;
}
const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjEzOGo1dWM4M285ZThkMDN1N3JwdXNhbGkgNGQ0MDk1NzFiZjk4ZTQxMDc5YjBmMDQwNjNiZDUzNGRhMmJhYTg4Y2E5YjlmNTc5MGFiNzY1YWE3NDA1MWQ0MUBn&tmsrc=4d409571bf98e41079b0f04063bd534da2baa88ca9b9f5790ab765aa74051d41%40group.calendar.google.com";

const CalendarsDialog = ({ anchorEl, onClose }: Props) => {
  const onGoogleCalendarClick = () => {
    window.open(GOOGLE_CALENDAR_URL, "_blank");
    onClose();
  };

  const onAppleCalendarClick = () => {
    const save: HTMLAnchorElement = document.createElement("a");
    save.rel = "noopener";
    save.href = "/assets/MatrimonioCristianoMarta.ics";
    save.target = "_self";
    save.download = "MatrimonioCristianoMarta.ics";
    const evt = new MouseEvent("click", {
      view: window,
      button: 0,
      bubbles: true,
      cancelable: false,
    });
    save.dispatchEvent(evt);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
    onClose();
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onGoogleCalendarClick}>
        <SvgIcon sx={{ mr: 2 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Google Calendar"
            role="img"
            viewBox="0 0 512 512"
          >
            <rect width="512" height="512" rx="15%" fill="#ffffff" />
            <path
              d="M100 340h74V174H340v-74H137Q100 100 100 135"
              fill="#4285f4"
            />
            <path d="M338 100v76h74v-41q0-35-35-35" fill="#1967d2" />
            <path d="M338 174h74V338h-74" fill="#fbbc04" />
            <path d="M100 338v39q0 35 35 35h41v-74" fill="#188038" />
            <path d="M174 338H338v74H174" fill="#34a853" />
            <path d="M338 412v-74h74" fill="#ea4335" />
            <path
              d="M204 229a25 22 1 1 1 25 27h-9h9a25 22 1 1 1-25 27M270 231l27-19h4v-7V308"
              stroke="#4285f4"
              stroke-width="15"
              stroke-linejoin="bevel"
              fill="none"
            />
          </svg>
        </SvgIcon>
        <Typography textAlign="center">Google Calendar</Typography>
      </MenuItem>
      <MenuItem onClick={onAppleCalendarClick}>
        <SvgIcon sx={{ mr: 2 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
          >
            <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
          </svg>
        </SvgIcon>
        <Typography textAlign="center">Apple Calendar</Typography>
      </MenuItem>
    </Menu>
  );
};
export default function AddToCalendar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Seleziona il calendario">
        <Button variant="contained" onClick={handleOpenMenu}>
          Aggiungi al calendario
        </Button>
      </Tooltip>
      <CalendarsDialog onClose={handleCloseMenu} anchorEl={anchorEl} />
    </>
  );
}
