
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'
import {Check, Search} from 'lucide-react'
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Nextjs from "@/app/icons/nextjs";
import Pocketbase from "@/app/icons/pocketbase";
import TailwindCSS from "@/app/icons/tailwind";
import Supabase from "@/app/icons/supabase";
import TypeScript from "@/app/icons/typescript";
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    TypeScript,
    Supabase,
    Link,
    Image,
    Check,
    cn,
    buttonVariants,
    Nextjs,
    Pocketbase,
    Search,
    TailwindCSS,
    ...components,
  }
}