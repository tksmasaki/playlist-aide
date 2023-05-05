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
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-center">新規プレイリストに追加する曲を選択</h2>
        <div className="tabs">
          {Object.values(tabs).map((tab, index) => (
            <button
              key={index}
              className={`tab-lifted tab ${
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
            {/* 修正時の参考URL: https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text */}
            <form>
              <input
                className="input-bordered input"
                type="search"
                placeholder="キーワードを入力してください"
              />
            </form>
          </>
        ) : (
          <select
            className="select-bordered select mb-2 w-[16rem]"
            onChange={(e) => setSelectedLibraryId(e.target.value)}
          >
            {libraries.map((library) => (
              <option key={library.id} value={library.id}>
                {library.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
}
