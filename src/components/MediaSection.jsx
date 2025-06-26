import MediaCard from "./MediaCard";

const MediaSection = ({ title, data = [] }) => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <button className="text-blue-400 hover:underline">Tout afficher</button>
      </div>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide max-w-full">
        {data.map((media, index) => (
          <MediaCard key={index} titre={media.titre} url={media.url} />
        ))}
      </div>
    </div>
  );
};

export default MediaSection;