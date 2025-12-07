import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/backgrounds/login-bg.png";
import { supabase } from "../services/supabase/client";
import toast from "react-hot-toast";
import { Eye, EyeOff, Loader } from "lucide-react";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import Footer from "../components/ui/Footer";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    if (!email || !password) {
      toast.error("Email and password are required.");
      setLoading(false);
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      if (authError.message.includes("Invalid login credentials")) {
        toast.error("Invalid email or password.");
      } else {
        toast.error(authError.message)
      }
    } else {
      // Successful login - navigate to dashboardSelect
      navigate("/dashboardSelect");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-row">
      <div className="max-md:w-full h-full w-1/2">
        <Logo className="text-white px-6 py-2" />
        <div className="bg-transparent flex flex-col justify-center items-center p-6" style={{ backgroundImage: `url(${bgImage})`, backgroundOrigin: 'cover', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100%' }}>
          <div className="max-sm:w-full w-[340px]">
            <h1 className="text-white text-[52px] font-bold mb-6">Welcome Back</h1>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="mb-4 p-3 rounded-xl bg-primary text-white border border-gray-100 focus:outline-none"
              placeholder="Enter your school email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                className="pr-12 p-3 rounded-xl bg-primary text-white border border-gray-100 focus:outline-none"
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
              className="flex items-center justify-center font-semibold rounded-xl  
        shadow-[0_3px_2px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.8)] hover:scale-[1.01] transition-all duration-150 disabled:opacity-50 disabled:hover-none disabled:border-none disabled:cursor-not-allowed h-[47px] w-full bg-white text-primary"
            >
              {loading ? <Loader /> : "Sign in"}
            </Button>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 hidden bg-white text-primary text-center p-6 md:flex flex-col items-center justify-between py-12">
        <div className="h-1/2 py-8 flex flex-col justify-between">
          <h1 className="text-6xl font-semibold leading-28 ">Quick Tips</h1>
          <p>
            <span className="font-medium text-2xl mb-2 block">Ask for Support</span>
            <span className="leading-5 block">
              If something seems off - like missing transactions or invoices - Contact your support team or Master-Fees admin.
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
