import ProductCard from '../Components/ProductCard';

const Products = () => {
  const productList = [
    {
        id: 1,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/7396dbda-82f7-4ceb-a189-4b07a74cb7a8/7396dbda-82f7-4ceb-a189-4b07a74cb7a8.jpeg?w=190',
        title: 'Monitor AOC 25G3ZM/BK',
        price: '179.90',
        oldPrice: '309.50',
        discount: 42
      },
      {
        id: 2,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/0adc1e36-0068-4085-b266-4093f03eae29/0adc1e36-0068-4085-b266-4093f03eae29.jpeg?w=190',
        title: 'Tavolinë elektrike SENSE7',
        price: '179.50',
        oldPrice: '233.50',
        discount: 23
      },
      {
        id: 3,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/5c07e5fd-836d-42c2-ac69-bc92ebefe497/5c07e5fd-836d-42c2-ac69-bc92ebefe497.jpeg?w=190',
        title: 'Tavolinë SENSE7 Nomad',
        price: '109.50',
        oldPrice: '179.50',
        discount: 39
      },
      {
        id: 4,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/0562c282-4d32-4123-957a-ea256be2329c/0562c282-4d32-4123-957a-ea256be2329c.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      },
      {
        id: 5,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/b38cfca9-40a0-47a6-a99d-ad325f8c704a/b38cfca9-40a0-47a6-a99d-ad325f8c704a.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      },
      {
        id: 6,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/0562c282-4d32-4123-957a-ea256be2329c/0562c282-4d32-4123-957a-ea256be2329c.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      },
      {
        id: 7,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/b38cfca9-40a0-47a6-a99d-ad325f8c704a/b38cfca9-40a0-47a6-a99d-ad325f8c704a.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      }
      ,
      {
        id: 8,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/0562c282-4d32-4123-957a-ea256be2329c/0562c282-4d32-4123-957a-ea256be2329c.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      },
      {
        id: 9,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/b38cfca9-40a0-47a6-a99d-ad325f8c704a/b38cfca9-40a0-47a6-a99d-ad325f8c704a.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      }
      ,
      {
        id: 10,
        image: 'https://iqq6kf0xmf.gjirafa.net/images/b38cfca9-40a0-47a6-a99d-ad325f8c704a/b38cfca9-40a0-47a6-a99d-ad325f8c704a.jpeg?w=190',
        title: 'Karrige SENSE7 Spellcaster',
        price: '159.50',
        oldPrice: '269.50',
        discount: 41
      }
      
  ];

  return (
    <div className="product-container">
    {productList.map(product => (
      <ProductCard key={product.id} 
                  product={product} 
      />
    ))}
  </div>

  );
};

export default Products;
