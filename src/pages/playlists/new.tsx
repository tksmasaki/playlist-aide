import Layout from '@/components/Layout';

export default function New() {
  return (
    <Layout>
      <NewPlaylist />
    </Layout>
  );
}

const NewPlaylist = () => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-center">新規プレイリストに追加する曲を選択</h2>
      </div>
    </>
  );
};
