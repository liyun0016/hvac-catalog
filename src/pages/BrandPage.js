import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrandList from '../components/BrandList';
import SearchBar from '../components/SearchBar';
import hvacData from '../data/hvacData';

function BrandPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredBrands = hvacData.filter(b =>
    b.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <SearchBar placeholder="Search brands..." onSearch={setSearch} />
      <BrandList
        brands={filteredBrands}
        onSelect={brand => navigate(`/brand/${brand}`)}
      />
    </div>
  );
}

export default BrandPage;
