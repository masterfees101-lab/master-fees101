import { useState } from "react";
import bgImage from "../../assets/image.png";
import { supabase } from "../../services/supabase/client";
import { Eye, EyeOff } from "lucide-react";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Button from "../../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    // TODO: Handle different error types
    if (error) {
      setError("Invalid login details");
    } else {
      window.location.href = "/dashboard";
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-row">
      <div className="max-md:w-full h-full w-1/2">
        <div className="absolute p-6">
          <img src="/logo.png" className="inline w-52" alt="logo" />
        </div>
        <div className="bg-transparent flex flex-col justify-center items-center p-6" style={{ backgroundImage: `url(${bgImage})`, backgroundOrigin: 'cover', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100%' }}>
          <div className="max-sm:w-full w-[340px]">
            <h1 className="text-white text-[52px] font-bold mb-6">Welcome Back</h1>
            {error && <p className="text-white p-2 mb-4 rounded">{error}</p>}
            <Label>Email</Label>
            <Input
              className="mb-4"
              placeholder="Enter your school email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Password</Label>
            <div className="relative">
              <Input
                className="pr-12"
                placeholder="Enter your password"
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-3 text-white cursor-pointer"
              >
                {show ? <EyeOff size={22} /> : <Eye size={22} />}
              </span>
            </div>
            <div className="flex items-center justify-between text-[12px] text-white mt-3 mb-12">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Remember me</span>
              </div>

              {/* TODO: Change the element below to an actual link */}
              <span className="hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-white text-[--color-primary] font-semibold p-3 rounded-xl shadow hover:scale-[1.02] transition"
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 hidden bg-white text-[--color-primary] text-center p-6 md:flex flex-col items-center justify-between py-12">
        <div className="h-1/2 py-8 flex flex-col justify-between">
          <h1 className="text-6xl font-semibold leading-28 ">Quick Tips</h1>
          <p>
            <span className="font-medium text-2xl mb-2 block">Ask for Support</span>
            <span className="leading-5 block">
              If something seems off - like missing transactions or invoices - Contact your support team or Master-Fees admin.
            </span>
          </p>
        </div>
        <div className="text-[13px] font-medium">
          <p className="text-xs">© All Rights Reserved 2025</p>
          <p>Master-Fees ltd.</p></div>
      </div>
    </div>
  );
}
