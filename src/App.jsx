import { Auth, User } from "./layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoute, GuestRoute } from "./utils";

import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={
          <GuestRoute>
            <Auth />
          </GuestRoute>
        } />

        <Route path="/user/*" element={
          <AuthRoute>
            <User />
          </AuthRoute>
        } />

        <Route path="/" element={<Navigate to="/auth/sign-in" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}


export default App
