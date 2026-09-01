import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router";


interface Breadcrumb {
    label: string,
    to: string
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[]
}


const CustomBreadcrumbs = ({ currentPage, breadcrumbs }: Props) => {
    return (
        <Breadcrumb
            className="my-5"
        >
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink >
                        <Link to='/'>Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                {
                    breadcrumbs?.map((crumb) => (
                        <div className="flex items-center">
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link to={crumb.to}>{crumb.label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />
                        </div>
                    ))
                }

                <BreadcrumbItem>
                    <BreadcrumbLink>
                        {currentPage}
                    </BreadcrumbLink>
                </BreadcrumbItem>


                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem> */}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default CustomBreadcrumbs;
