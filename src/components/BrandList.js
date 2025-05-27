import React from 'react';

function BrandList({ brands, selectedBrand, onSelect }) {
  return (
    <div className="brand-list">
      <h2>Brands</h2>
      <ul>
        {brands.map((brand) => (
          <li
            key={brand.brand}
            onClick={() => onSelect(brand.brand)}
            className={brand.brand === selectedBrand ? 'selected' : ''}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem 0',
              cursor: 'pointer'
            }}
          >
            <img
              src={brand.logo}
              alt={brand.brand}
              style={{ width: '40px', height: 'auto', objectFit: 'contain' }}
            />
            <span>{brand.brand}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandList;
