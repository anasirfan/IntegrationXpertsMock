import React from 'react';

const TopProducts = () => {
  const products = [
    {
      id: '01',
      name: 'Home Decor Range',
      popularity: 45,
      color: '#0095FF'
    },
    {
      id: '02',
      name: 'Disney Princess Pink Bag 18\'',
      popularity: 25,
      color: '#00E096'
    },
    {
      id: '03',
      name: 'Bathroom Essentials',
      popularity: 18,
      color: '#884DFF'
    },
    {
      id: '04',
      name: 'Apple Smartwatches',
      popularity: 25,
      color: '#FF8F0D'
    }
  ];

  return (
    <div className="card bg-white p-6 rounded-2xl">
      <h3 className="font-semibold text-lg mb-4">Top Products</h3>
      <div className="space-y-1">
        <div className="grid grid-cols-12 text-md text-gray-400 px-2 py-1">
          <span className="col-span-1">#</span>
          <span className="col-span-5">Name</span>
          <span className="col-span-5">Popularity</span>
          <span className="col-span-1">Sales</span>
        </div>
        {products.map((product) => (
          <div 
            key={product.id}
            className="grid grid-cols-12 items-center justify-center  border-t border-gray-300 px-2 py-4"
          >
            <span className="col-span-1 text-lg text-gray-500">{product.id}</span>
            <span className="col-span-5 text-md font-medium text-gray-600">{product.name}</span>
            <div className="col-span-5 flex items-center">
              <div 
                className="w-[90%] h-1.5 rounded-full overflow-hidden"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${product.popularity}%`,
                    backgroundColor: product.color
                  }}
                />
              </div>
            </div>
            <div 
              className="col-span-1 text-sm rounded-xl py-2 text-center"
              style={{ 
                color: product.color,
                backgroundColor: `${product.color}20`,
                border: `1px solid ${product.color}`
              }}
            > 
              {product.popularity}%
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
