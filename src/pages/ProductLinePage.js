import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductLines from '../components/ProductLines';
import SearchBar from '../components/SearchBar';
import hvacData from '../data/hvacData';

function ProductLinePage() {
  const { brandName } = useParams();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const brand = hvacData.find(b => b.brand === brandName);
  const filteredLines = brand?.productLines.filter(l =>
    l.line.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <SearchBar placeholder="Search product lines..." onSearch={setSearch} />
      <ProductLines
        productLines={filteredLines}
        onSelect={line => navigate(`/brand/${brandName}/line/${line.line}`)}
      />
    </div>
  );
}

export default ProductLinePage;
