"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";
import { usePathname } from 'next/navigation';

const LoginButton = () => {
  const [user, setUser] = useState<any>(null);
  const currentRoute = usePathname();
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  if (user) {
    return (
      <Button
        className='bg-white border border-solid border-neutral-300 text-black text-lg px-8 mt-3 py-6 hover:-translate-y-1 cursor-pointer hover:bg-[#6769f5] mb-2 hover:text-white'
        onClick={() => {
          router.push("/Main")
        }}
      >
        Go to dashboard
      </Button>
    );
  }
  return (
    <Button
      className='bg-[#768BFF] text-lg px-8 mt-3 py-6 hover:-translate-y-1 cursor-pointer hover:bg-[#6769f5] mb-2'
      onClick={() => {
        router.push("/login");
      }}
    >
      Take the leap
    </Button>
  );
};

export default LoginButton;