"use client"
import {
  LogOut,
} from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
export function NavUser({

}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  useSidebar()
 
  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <LogoutLink>
              <LogOut href="/api/auth/logout" />

              </LogoutLink>
              Sair
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}