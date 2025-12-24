
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Suppress browser extension errors that don't affect the application
  // This handles errors like "The message port closed before a response was received"
  // which are caused by browser extensions trying to communicate with the page
  window.addEventListener('error', (event) => {
    // Check if the error is from a browser extension
    if (event.message && (
      event.message.includes('Extension context invalidated') ||
      event.message.includes('message port closed') ||
      event.message.includes('runtime.lastError')
    )) {
      event.preventDefault();
      return true;
    }
  });

  // Handle unhandled promise rejections from browser extensions
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.message && (
      event.reason.message.includes('Extension context invalidated') ||
      event.reason.message.includes('message port closed') ||
      event.reason.message.includes('runtime.lastError')
    )) {
      event.preventDefault();
      return true;
    }
  });

  createRoot(document.getElementById("root")!).render(<App />);
  