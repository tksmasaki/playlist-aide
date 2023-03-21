import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Playlist Manager</title>
        <meta
          name="description"
          content="Application to create and edit playlists on Spotify easily"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: set icon */}
        {/* <link rel="icon" href="" /> */}
      </Head>
      <main>
        <div>Playlist Manager</div>
      </main>
    </>
  );
}
