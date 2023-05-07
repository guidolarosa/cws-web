import Link from "next/link";
import getLocale from "@/localization";
import { useRouter } from "next/router";

const Menu = (props : any) => {
  const router = useRouter();
  const locale: any = getLocale(router);

  return (
    <ul className="w-full">
        {locale.uiConstants.navigation.map((item: any) => (
          <Link href={item.href} key={item.label}>
            <li
              className={
                "flex items-center px-4 border-0 border-b w-full transition cursor-pointer black hover:bg-primary-500 hover:text-primary-50 h-12 bg-primary-100 text-primary-500 dark:bg-dark-900 dark:hover:bg-dark-500 dark:text-dark-500 dark:hover:text-dark-950"
              }
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
  )
}

export default Menu;