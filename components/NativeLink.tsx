import type { AnchorHTMLAttributes } from "react";

/**
 * Use a native navigation request so every route works consistently on
 * Vinext deployments, including platforms where RSC client transitions are
 * not available.
 */
export function NativeLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props}>{children}</a>;
}
