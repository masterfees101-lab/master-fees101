import './App.css'
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      {/* Global toast notifications */}
    {/* This allows the app to display toast messages for user feedback e.g  */}
    {/* when a using enters a wrong password or email or any other errors thrown by supabase  noted*/}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
        }}
      />
    </>
  )
}

export default App;