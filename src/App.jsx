import './App.css'
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";
import { TOAST_DURATION } from "./utils/constants";

function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: TOAST_DURATION,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
        }}
      />
    </ErrorBoundary>
  )
}

export default App;