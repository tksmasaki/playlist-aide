import Image from 'next/image';

const TrackList = ({ tracks }: { tracks: SpotifyApi.TrackObjectFull[] }) => {
  return (
    <div className="h-[60vh] w-full overflow-y-auto">
      {tracks.map((track) => (
        <div key={track.id} className="my-4 flex gap-2">
          <figure className="flex-shrink-0">
            <Image
              src={track.album.images[0].url}
              width={50}
              height={50}
              alt={`Picture of the album: ${track.album.name}`}
            />
          </figure>
          <div className="flex flex-col justify-center overflow-hidden">
            <div>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                {track.name}
              </p>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                {track.artists.map((artist) => artist.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
