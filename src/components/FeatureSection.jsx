import { features } from "../constants";


const FeatureSection = () => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-center text-4xl font-bold">Feature</h1>
        <p className="text-center text-xl mt-5">Enhance the feature of my website</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
            {
                features.map((item, index) => (
                    <div key={index} className="p-3 flex gap-5 cursor-pointer rounded-2xl bg-gray-800 hover:scale-105 transition-all">
                        <div className="mt-1">
                            {item.icon}
                        </div>
                        <div>
                            <h1 className="font-bold text-xl">{item.text}</h1>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;