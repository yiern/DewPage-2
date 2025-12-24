
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Suppress browser extension errors that don't affect the application
  // This handles errors like "The message port closed before a response was received"
  // which are caused by browser extensions trying to communicate with the page

  // Helper function to check if an error message is from a browser extension
  function isBrowserExtensionError(message: string): boolean {
    return (
      message.includes('Extension context invalidated') ||
      message.includes('message port closed') ||
      message.includes('runtime.lastError')
    );
  }

  window.addEventListener('error', (event) => {
    // Check if the error is from a browser extension
    if (event.message && isBrowserExtensionError(event.message)) {
      event.preventDefault();
      return true;
    }
  });

  // Handle unhandled promise rejections from browser extensions
  window.addEventListener('unhandledrejection', (event) => {
    // Check if reason is an Error object with a message property
    if (event.reason instanceof Error && isBrowserExtensionError(event.reason.message)) {
      event.preventDefault();
      return true;
    }
    // Also handle string rejections
    if (typeof event.reason === 'string' && isBrowserExtensionError(event.reason)) {
      event.preventDefault();
      return true;
    }
  });

  createRoot(document.getElementById("root")!).render(<App />);
  