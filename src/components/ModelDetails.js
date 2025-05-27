import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ModelDetails({ models }) {
  const navigate = useNavigate();
  const { brandName, lineName } = useParams();

  return (
    <div className="model-details">
      <h2>Models</h2>
      <ul style={{ paddingLeft: 0 }}>
        {models.map((model) => (
          <li
            key={model.name}
            onClick={() =>
              navigate(`/brand/${brandName}/line/${lineName}/model/${model.name}`)
            }
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '0.5rem 0',
              borderBottom: '1px solid #eee',
              listStyleType: 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {model.model_image && (
                <img
                  src={model.model_image}
                  alt={model.name}
                  style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                />
              )}
              <div>
                <strong>{model.name}</strong>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  {model.efficiency}
                </div>
              </div>
            </div>
            <span style={{ color: '#bbb' }}>➔</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModelDetails;
