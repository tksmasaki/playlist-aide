import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between px-2">
        <Link href="/">
          <h1 className="text-2xl font-bold">Playlist Aide</h1>
        </Link>
        <div>
          <span className="font-bold">🚧 開発中 🚧</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
