import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Component() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <h2>
          <p>Signed in as {session?.user?.name}</p>
          {session.user?.image && (
            <Image
              src={session.user?.image}
              alt="user image"
              width={200}
              height={200}
            />
          )}
        </h2>
        <div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>
        Not signed in <br />
      </h2>
      <div>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
