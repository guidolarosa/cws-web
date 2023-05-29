import Link from "next/link";

const ListLink = (props: any) => {
  let services: any = [];
  props.data.work.services?.forEach((service: any) => {
    props.data.services.forEach((srcServices: any) => {
      if (service._ref === srcServices._id) {
        services.push(srcServices.name);
      }
    });
  });

  return (
    <Link
      href={props.href}
      className={
        "last:border-b-0 h-24 flex items-center px-4 border-b hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 dark:hover:text-dark-950 cursor-pointer transition relative dark:hover:z-10 z-0"
      }
    >
      <li className="flex flex-col">
        <span className="mr-4 text-2xl mb-2">{props.data.work.name}</span>
        <span className="font-light text-xs opacity-70">
          {services.map(
            (service: any, index: any) =>
              `${service}${index < services.length - 1 ? ", " : ""}`
          )}
        </span>
      </li>
    </Link>
  );
};

export default ListLink;
