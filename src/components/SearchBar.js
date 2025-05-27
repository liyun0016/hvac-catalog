import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBar({ placeholder, onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getBreadcrumbs = () => {
    const parts = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = [];

    if (parts[0] === 'brand') {
      if (parts[1]) {
        breadcrumbs.push({
          name: decodeURIComponent(parts[1]),
          url: `/brand/${parts[1]}`
        });
      }
      if (parts[2] === 'line' && parts[3]) {
        breadcrumbs.push({
          name: decodeURIComponent(parts[3]),
          url: `/brand/${parts[1]}/line/${parts[3]}`
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div style={styles.wrapper}>
      <div style={styles.topBar}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <input
          type="text"
          placeholder={placeholder}
          onChange={e => onSearch(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.breadcrumbs}>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          style={styles.breadcrumbLink}
        >
          ...
        </a>
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {' / '}
            <a
              href={crumb.url}
              onClick={(e) => {
                e.preventDefault();
                navigate(crumb.url);
              }}
              style={styles.breadcrumbLink}
            >
              {crumb.name}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '1rem',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto'
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  backButton: {
    fontSize: '1.2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '1rem',
    width: '100%'
  },
  breadcrumbs: {
    marginTop: '0.5rem',
    fontSize: '0.9rem'
  },
  breadcrumbLink: {
    color: '#0077cc',
    textDecoration: 'none',
    cursor: 'pointer'
  }
};

export default SearchBar;
