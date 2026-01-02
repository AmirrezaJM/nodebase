"use client";


import {
    CreditCardIcon, FolderOpenIcon, HistoryIcon, KeyIcon, LogOutIcon, StarIcon,
} from "lucide-react";
import Image from "next/image"; import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { useHasActiveSubscription } from "@/features/subscriptions/hooks/use-subscriptions";


const menultems = [
    {
        title: "Main",
        items: [
            { title: "Workflows", icon: FolderOpenIcon, url: "/workflows" },
            { title: "Credentials", icon: KeyIcon, url: "/credentials" },
            { title: "Executions", icon: HistoryIcon, url: "/executions" },
        ]
    }
];

export const AppSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { hasActiveSubscription, isLoading } = useHasActiveSubscription();
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenuButton asChild className="gap-x-4 h-10 px-4">
                    <Link href="/workflows" prefetch>
                        <Image src="/logo/logo.svg" alt="Nodebase" width={30} height={30} />
                        <span className="font-semibold text-sm">Nodebase</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                {menultems.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        {/* AsChild to be a link because it's not valid to render an href element */}
                                        <SidebarMenuButton className="gap-x-4 h-10 px-4" tooltip={item.title} isActive={item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)} onClick={() => router.push(item.url)} asChild>
                                            {/* prefetch is a performance optimization and worked as it act like it is cached */}
                                            <Link href={item.url} prefetch>
                                                <item.icon className="size-4" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {!hasActiveSubscription && !isLoading && (
                        < SidebarMenuItem >
                            <SidebarMenuButton tooltip="Upgrade to Pro" className="gap-x-4 h-10 px-4" onClick={() => authClient.checkout({ slug: "nodebase-Pro" })}>
                                <StarIcon className="size-4" />
                                Upgrade to Pro
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )}
                    <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Billing Portal" className="gap-x-4 h-10 px-4" onClick={() => authClient.customer.portal()}>
                            <CreditCardIcon className="size-4" />
                            Billing Portal
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Logout" className="gap-x-4 h-10 px-4" onClick={() => authClient.signOut({
                            fetchOptions: {
                                onSuccess: () => {
                                    router.push('/login');
                                },
                            },
                        })}>
                            <LogOutIcon className="size-4" />
                            Sign out
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    );
};