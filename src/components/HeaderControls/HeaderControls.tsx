import Link from "next/link";

export default function HamburgerMenu(props : any) {
  console.log(props.children)
  return (
    <div className={`${props.className} h-full`}>
      <ul className="flex h-full">
        {props.controls.map((control : any, index : number) => (
          <li key={index} className={`group aspect-square h-full flex items-center justify-center ml-auto border-l hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 cursor-pointer dark:hover:text-dark-950 ${control.hideMobile && 'hidden'} md:flex ${control.hideDesktop && 'md:hidden'}`}>
            {control.element}
          </li>
        ))}
      </ul>
    </div>
  );
}
