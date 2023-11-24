import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function HomePage({ products }) {
  return (
    <ul>
      {products.map(product => (
        <Link key={product.id} href={`/${product.id}`}>
          <li>{product.title}</li>
        </Link>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default HomePage;
