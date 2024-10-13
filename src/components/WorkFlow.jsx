import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.jpg"
import { checklistItems } from "../constants";
const WorkFlowPage = () => {
  return (
    <div className="mt-20 px-10">
        <h1 className="text-center text-4xl p-5">Accelerate Your Coding WorkFlow</h1>
        <div className="flex">

        <div className="w-full md:w-1/2">
            <img src={code} alt="" />
        </div>
        <div className="w-full md:w-1/2 mt-5">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-16">
                    <div className="text-green-600 h-10 w-10 p-2 mx-6">
                        <CheckCircle2 />
                    </div>
                    <div>
                        <h5 className="mt-1 text-xl">{item.title}</h5>
                        <p className="text-gray-500">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
            </div>
    </div>
  );
};

export default WorkFlowPage;