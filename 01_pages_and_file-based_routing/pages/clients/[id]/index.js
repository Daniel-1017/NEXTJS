import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // load data...
    router.push('/clients/max/projectA');
  };

  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
