import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeletonLoading = () => {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br py-3 from-primary/10 to-accent/10">
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-20" />
            </CardHeader>

            <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-4 w-40" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-4 w-32" />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                    <Skeleton className="h-9 w-full" />
                    <Skeleton className="h-9 w-full" />
                </div>
            </CardContent>
        </Card>
    );
};
