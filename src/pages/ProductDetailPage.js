import React from 'react';
import { useParams } from 'react-router-dom';
import hvacData from '../data/hvacData';
import SearchBar from '../components/SearchBar';

function ProductDetailPage() {
  const { brandName, lineName, modelName } = useParams();

  const brand = hvacData.find(b => b.brand === brandName);
  const line = brand?.productLines.find(l => l.line === lineName);
  const model = line?.models.find(m => m.name === modelName);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <SearchBar placeholder="Search..." onSearch={() => {}} />
      <div style={{ padding: '1rem' }}>
        <h2>{model?.name}</h2>
        <p><strong>Brand:</strong> {brandName}</p>
        <p><strong>Product Line:</strong> {lineName}</p>
        {model?.model_image && (
          <img src={model.model_image} alt={model.name} style={{ width: '100px', margin: '1rem 0' }} />
        )}
        <p><strong>Efficiency:</strong> {model?.efficiency || 'N/A'}</p>
        <p>This is a placeholder for the product detail page. You can add more specs or a manual link here.</p>
      </div>
    </div>
  );
}

export default ProductDetailPage;
