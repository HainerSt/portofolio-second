const getRandomColor = () => {
  const colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export default getRandomColor;
