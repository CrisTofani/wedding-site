import { CircularProgress } from "@mui/material";
import "./index.css";

export const LoadingPlaceholder = () => (
  <div className="loading-placeholder">
    <CircularProgress color="primary" />
  </div>
);
