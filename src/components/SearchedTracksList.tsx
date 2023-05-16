import useDebounce from '@/hooks/useDebounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useState } from 'react';
import TrackList from './TrackList';

const SearchedTracksList = () => {
  const [tracks, setTracks] = useState([]);

  const debounce = useDebounce(500);
  const handleSearchKeywordChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    debounce(() => {
      if (e.target.value) {
        axios
          .post('/api/spotify/search', { searchKeyword: e.target.value })
          .then((res) => {
            setTracks(res.data.tracks.items);
          })
          .catch((error) => console.log(error));
      } else {
        setTracks([]);
      }
    });
  };

  return (
    <>
      <div className="form-control w-full">
        <label className="input-group">
          <span>
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="キーワードを入力してください"
            className="input-bordered input flex-1 placeholder:text-sm placeholder:italic placeholder:opacity-50"
            onChange={(e) => handleSearchKeywordChange(e)}
          />
        </label>
      </div>
      <TrackList tracks={tracks} />
    </>
  );
};

export default SearchedTracksList;
