'use client'
import LoginButton from '@/components/LoginLogoutButton'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import loading from "@/components/media/loading.gif"
import Image from 'next/image';
import Stage12 from "./Stage12"

function Page() {
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);

      const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('email', user?.email)
      if(data) {
        setUserData({
          email: user?.email,
          avatar: user?.user_metadata.avatar_url,
          full_name: data[0].full_name,
          dashboard_done: data[0].dashboard_done,
          idea: data[0].idea
        });
      }
    };
    fetchUser();
  }, []);
  return (
    <div className='h-[100vh] w-full'>
      {userData ? (
        <div className='h-full w-full'>
          {/* Time to now make the flow happen of form and etc */}
          <>
            {userData.dashboard_done=="no" && !(userData.idea) && (
              <Stage12/>
            )}
          </>
        </div>
      ):(
        <div className='flex items-center justify-center h-full'>
          <Image className='h-30 w-auto' alt='' src={loading}/>
        </div>
      )}
    </div>
  )
}

export default Page