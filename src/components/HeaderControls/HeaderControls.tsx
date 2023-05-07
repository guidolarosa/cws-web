import Link from "next/link";

export default function HeaderControls(props : any) {
  return (
    <div className={`h-full ${props.className}`}>
      <ul className="flex h-full md:h-full">
        {props.controls.map((control : any, index : number) => (
          <li key={index} className={`group aspect-square h-full grow flex items-center justify-center border-l cursor-pointer hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 dark:hover:text-dark-950 ${control.hideMobile && 'hidden'} md:flex ${control.hideDesktop && 'md:hidden'} ${props.controlStyles}`}>
            {control.element}
          </li>
        ))}
      </ul>
    </div>
  );
}
