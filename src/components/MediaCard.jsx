const MediaCard = ({ titre, url }) => {
  return (
    <div className="bg-gray-900 border border-white text-center p-4 rounded-lg w-56 flex-shrink-0">
      <img src={url} alt={titre} className="w-48 mt-2 rounded-md mx-auto" />
      <h2 className="text-white mt-2">{titre}</h2>
    </div>
  );
};

export default MediaCard;