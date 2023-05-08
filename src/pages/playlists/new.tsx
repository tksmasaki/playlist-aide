import {
  MagnifyingGlassIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
export default function New() {
  const tabs = {
    0: '検索から追加',
    1: 'マイライブラリから追加',
  };
  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedLibraryId, setSelectedLibraryId] = useState<
    string | undefined
  >(undefined);
  const libraries = [
    { id: 0, name: 'マイライブラリ' },
    { id: 1, name: 'プレイリスト' },
  ];

  const tracks = [
    ...Array.from({ length: 20 }, (_, index) => ({
      id: index,
      name: `Track ${index}`,
    })),
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        <h2 className="text-center text-lg">
          新規プレイリストに追加する曲を選択
        </h2>
        <div className="tabs w-full">
          {Object.values(tabs).map((tab, index) => (
            <button
              key={index}
              className={`tab-bordered tab flex-1 px-0 ${
                selectedTab === index ? 'tab-active' : ''
              }`}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        {selectedTab === 0 ? (
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
                />
              </label>
            </div>
            <TrackList tracks={tracks} />
          </>
        ) : (
          <>
            <select
              className="select-bordered select w-full text-center"
              onChange={(e) => setSelectedLibraryId(e.target.value)}
            >
              {libraries.map((library) => (
                <option key={library.id} value={library.id}>
                  {library.name}
                </option>
              ))}
            </select>
            <TrackList tracks={tracks} />
          </>
        )}
      </div>
    </>
  );
}

const TrackList = ({ tracks }: { tracks: any[] }) => {
  return (
    <div className="h-[60vh] w-full overflow-y-auto">
      {tracks.map((track) => (
        <div key={track.id} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <MusicalNoteIcon className="h-5 w-5" />
          </figure>
          <div className="card-body">
            <p className="card-title">{track.name}</p>
            <p>Artist name</p>
          </div>
        </div>
      ))}
    </div>
  );
};
