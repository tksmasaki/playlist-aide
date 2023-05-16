import SearchedTracksList from '@/components/SearchedTracksList';
import TrackList from '@/components/TrackList';
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
          <SearchedTracksList />
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
            <TrackList tracks={[]} />
          </>
        )}
      </div>
    </>
  );
}
