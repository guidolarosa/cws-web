import Image from "next/image";

const ToolCard = (props: any) => {
  return (
    <li className={`flex flex-col justify-center items-center mx-[0px] rounded-md ${props.className} relative [&:hover>.name]:opacity-100 p-4`}>
      <div className="w-20 md:w-24 md:h-24 dark:bg-dark-800 aspect-square p-4 rounded-md">
        <div className="relative h-full w-full">
          <Image
            src={props.logoUrl}
            fill
            alt={props.name}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="name w-full text-xs whitespace-nowrap opacity-0 transition-opacity py-2 text-center absolute bottom-[-16px]">
        <div className="text-center w-full">
          {props.name}
        </div>
      </div>
    </li>
  );
};

export default ToolCard;
