"use client";


import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { authClient } from "@/lib/auth-client";


interface UpgradeModal {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}


export const UpgradeModal = ({ open, onOpenChange }: UpgradeModal) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Upgrade to Pro</AlertDialogTitle>
                    <AlertDialogDescription>
                        You are using the free plan. Upgrade to Pro for more features.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => authClient.checkout({slug: "nodebase-pro"})}>Upgrade Now</AlertDialogAction>
                </AlertDialogFooter>    
            </AlertDialogContent>
        </AlertDialog>
    )
}

