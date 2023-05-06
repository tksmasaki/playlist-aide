import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
      <div className="flex flex-col items-center justify-center gap-4 px-4">
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
          </>
        ) : (
          <>
            <select
              className="select-bordered select mb-2 w-full text-center"
              onChange={(e) => setSelectedLibraryId(e.target.value)}
            >
              {libraries.map((library) => (
                <option key={library.id} value={library.id}>
                  {library.name}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </>
  );
}
