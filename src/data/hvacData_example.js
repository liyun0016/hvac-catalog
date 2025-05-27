const hvacData = [
  {
    brand: 'Carrier',
    logo: '/logos/Carrier.png',
    productLines: [
      {
        line: 'Infinity Series',
        product_line_image: '/images/infinity-series.png',
        models: [
          {
            name: '24VNA6',
            model_image: '/images/24vna6.png',
            efficiency: 'Up to 21 SEER2'
          },
          {
            name: '25VNA4',
            model_image: '/images/25vna4.png',
            efficiency: 'Up to 19 SEER2'
          }
        ]
      },
      {
        line: 'Performance Series',
        product_line_image: '/images/performance-series.png',
        models: [
          {
            name: '25SPA5',
            model_image: '/images/25spa5.png',
            efficiency: 'Up to 17 SEER2'
          }
        ]
      }
    ]
  },
  {
    brand: 'Trane',
    logo: '/logos/Trane.jpeg',
    productLines: [
      {
        line: 'XV Series',
        product_line_image: '/images/xv-series.png',
        models: [
          {
            name: 'XV20i',
            model_image: '/images/xv20i.png',
            efficiency: 'Up to 22 SEER2'
          }
        ]
      }
    ]
  }
];

export default hvacData;
