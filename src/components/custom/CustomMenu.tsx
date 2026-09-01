import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";


const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }


    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/* Hero */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive('/') && 'bg-slate-200 rounded-md p-2')}
                    >
                        <Link to={'/'}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Hero Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive('/search') && 'bg-slate-200 rounded-md p-2')}
                    >
                        <Link to={'/search'}>Heroes Search</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default CustomMenu;
