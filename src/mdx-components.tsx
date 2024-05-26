
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'
import {Check, Search} from 'lucide-react'
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Nextjs from "@/app/icons/nextjs";
import Pocketbase from "@/app/icons/pocketbase";
import TailwindCSS from "@/app/icons/tailwind";
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Link,
    Image,
    Check,
    cn,
    buttonVariants,
    Nextjs,
    Pocketbase,
    Search,
    TailwindCSS
  }
}