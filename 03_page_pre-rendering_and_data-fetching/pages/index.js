import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function HomePage({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link key={product.id} href={`/products/${product.id}`}>
            {product.title}
          </Link>
        </li>
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
