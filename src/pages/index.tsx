import Header from '@/components/Header';
import LoginBtn from '@/components/login-btn';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-3xl font-bold">Playlist Aide</h1>
        <LoginBtn />
      </main>
    </>
  );
}
