"use client"
import { useDebouncedCallback } from "@/hooks/useDebounce";
import { Input } from "../ui/input"
import { useState } from "react";

const SearchInput = ({ placeholder = "ابحث عن مريض...", fetchData }: { placeholder?: string, fetchData: (value: string) => void }) => {
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebouncedCallback((value: string) => {
        fetchData(value);
    }, 300);

    const handleSearch = (value: string) => {
        setSearch(value);
        debouncedSearch(value);
    };

    return (
        <div className="w-full md:max-w-xs">
            <Input
                placeholder={placeholder}
                value={search}
                className="bg-white border-gray-300 shadow-2xl"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchInput
