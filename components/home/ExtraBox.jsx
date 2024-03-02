import {
  UilCircuit,
  UilCarWash,
  UilPlug,
  UilTemperatureMinus,
  UilEllipsisH,
} from "@iconscout/react-unicons";
const ExtraBox = () => {
  return (
    <div className="extraBox">
      <div className="container flex items-center justify-center gap-3 flex-wrap">
        <div className="flex  items-center gap-3 box-extra">
          <UilCircuit size="43" color="#fd6934" />
          <span>Engien</span>
        </div>
        <div className="flex items-center gap-3 box-extra">
          <UilCarWash size="43" color="#fd6934" />
          <span>Transmition</span>
        </div>
        <div className="flex  items-center gap-3 box-extra">
          <UilPlug size="43" color="#fd6934" />
          <span>Electricty</span>
        </div>
        <div className="flex  items-center gap-3 box-extra">
          <UilTemperatureMinus size="43" color="#fd6934" />
          <span>Colding</span>
        </div>
        <div className="flex  items-center gap-3 box-extra">
          <UilEllipsisH size="43" color="#fd6934" />
          <span>+20 More</span>
        </div>
      </div>
    </div>
  );
};

export default ExtraBox;
