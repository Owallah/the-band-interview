import { Alert } from "@mui/material";

interface ErrorDisplayProps {
  error: Error;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return (
    <div className="error_message">
      <Alert severity="error">Error: {error.message}</Alert>
    </div>
  );
};

export default ErrorDisplay;