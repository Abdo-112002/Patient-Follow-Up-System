"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickActionsCardProps {
    title: string;
    description: string;
    buttonText: string;
    icon: React.ReactNode;
    onClick: () => void;
    gradientFrom?: string; // اختياري لتغيير ال gradient
    gradientTo?: string;   // اختياري لتغيير ال gradient
    buttonClassName?: string;
}

const QuickActionsCard: React.FC<QuickActionsCardProps> = ({
    title,
    description,
    buttonText,
    icon,
    onClick,
    gradientFrom = "from-primary/10",
    gradientTo = "to-accent/10",
    buttonClassName = "",
}) => {
    return (
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
            <CardHeader className={`bg-gradient-to-br py-6 ${gradientFrom} ${gradientTo}`}>
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors text-2xl w-fit">
                    {icon}
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <Button className={`w-full cursor-pointer ${buttonClassName}`}>{buttonText}</Button>
            </CardContent>
        </Card>
    );
};

export default QuickActionsCard;
