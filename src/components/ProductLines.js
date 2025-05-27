import React from 'react';

function ProductLines({ productLines, selectedLine, onSelect }) {
  return (
    <div className="product-lines">
      <h2>Product Lines</h2>
      <ul style={{ paddingLeft: 0 }}>
        {productLines.map((line) => (
          <li
            key={line.line}
            onClick={() => onSelect(line)}
            className={line === selectedLine ? 'selected' : ''}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '0.5rem 0',
              borderBottom: '1px solid #eee',
              listStyleType: 'none'
            }}
          >
            {line.product_line_image && (
              <img
                src={line.product_line_image}
                alt={line.line}
                style={{ width: '40px', height: '40px', marginRight: '12px', objectFit: 'contain' }}
              />
            )}
            <span>{line.line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductLines;
