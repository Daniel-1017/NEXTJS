const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <div id="archive-latest">{latest}</div>
    </div>
  );
};

export default ArchiveLayout;
