import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['zh-cn', 'en-us'],
  defaultLocale: 'zh-cn'
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);