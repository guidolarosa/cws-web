export default function Controls(props : any) {

  const itemStyles = `group h-full w-full grow flex items-center justify-center border-l cursor-pointer hover:bg-primary-500 hover:text-primary-50 dark:hover:bg-dark-500 dark:hover:text-dark-950 md:flex ${props.controlStyles}`
  
  return (
    <div className={`h-full ${props.className}`}>
      <ul className="flex h-full md:h-full">
        {props.controls.map((control : any, index : number) => (
          <li key={index} className={`${itemStyles} ${control.hideMobile && 'hidden'} ${control.hideDesktop && 'md:hidden'}`}>
            {control.element}
          </li>
        ))}
      </ul>
    </div>
  );
}
