import { CardSkeletonLoading } from "./CardSkeletonLoading";

export const LoadingCardsGrid = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeletonLoading key={i} />
            ))}
        </div>
    );
};
