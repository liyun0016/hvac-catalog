import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ModelDetails from '../components/ModelDetails';
import SearchBar from '../components/SearchBar';
import hvacData from '../data/hvacData';

function ModelPage() {
  const { brandName, lineName } = useParams();
  const [search, setSearch] = useState('');

  const brand = hvacData.find(b => b.brand === brandName);
  const line = brand?.productLines.find(l => l.line === lineName);
  const filteredModels = line?.models.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <SearchBar placeholder="Search models..." onSearch={setSearch} />
      <ModelDetails models={filteredModels} />
    </div>
  );
}

export default ModelPage;
