interface TechColor {
  color: string;
  list: string[];
}

export const techColorMap: Record<string, TechColor> = {
  'Front End': {
    color: '#FF6384',
    list: [
      'React',
      'Redux',
      'D3.js',
      'Bootstrap',
      'HTML',
      'CSS',
      'JavaScript',
      'Service Workers',
      'Chrome Extension API',
    ],
  },
  'Back End': {
    color: '#36A2EB',
    list: ['Express', 'Mongoose', 'MongoDB', 'Python', 'JWT', 'Passport'],
  },
  Deployment: { color: '#FFCE56', list: ['Heroku', 'Webpack', 'Babel'] },
  'Data Management': {
    color: '#4BC0C0',
    list: ['MongoDB', 'Mongoose', 'GridFS'],
  },
  Miscellaneous: {
    color: '#9966FF',
    list: ['YouTube API', 'Handlebars', 'PWA', 'json-server'],
  },
};

export const getContrastColor = (hexColor: string) => {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);

  const luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

  return luminance > 0.6 ? '#000' : '#FFF';
};
