import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Button from "./Authbutton";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: tweets } = await supabase.from("tweets").select();
  return (
    <div>
      <Button />
      <pre>{JSON.stringify(tweets)}</pre>
    </div>
  );
}
