import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

type ActiveLinkProps = {
  children: React.ReactNode
  className?: string
} & LinkProps

export const ActiveLink = ({ children, href, className, ...rest }: ActiveLinkProps) => {
  const router = useRouter()
  const isActive =
    router.pathname === href ||
    router.asPath === href ||
    (typeof href === "string" && router.asPath.startsWith(href))

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative group px-4 py-2 text-black-100 text-opacity-70 text-body-md hover:text-opacity-100",
        "transition-colors duration-200 will-change-auto",
        className,
        {
          "text-opacity-100": isActive,
        }
      )}
      {...rest}
    >
      {children}
      <span
        className="absolute left-0 bottom-0 w-full h-[2px] bg-black-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 will-change-transform"
        style={
          isActive
            ? { transform: "scaleX(1)" }
            : undefined
        }
      />
    </Link>
  )
}
