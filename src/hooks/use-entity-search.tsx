import { useEffect, useState } from "react";
import { PAGINATION } from "@/config/constants";

interface UseEntitySearchProps<T extends {
    search: string;
    page: number;
}> {
    params: T;
    setParams: (params: T) => void;
    debounceMs?: number;
}

export function useEntitySearch<T extends {
    search: string;
    page: number;
}>({
    params,
    setParams,
    debounceMs = 500
}: UseEntitySearchProps<T>) {
    const [localSearch, setLocalSearch] = useState(params.search);

    // Sync local state when URL params change externally
    useEffect(() => {
        if(localSearch === "" && params.search !== "") {
            setParams({
                ...params,
                search: "",
                page: PAGINATION.DEFAULT_PAGE_NUMBER
            })
            return;
        }
        const timer = setTimeout(() => {
            if(localSearch !== params.search) {
                setParams({
                    ...params,
                    search: localSearch,
                    page: PAGINATION.DEFAULT_PAGE_NUMBER
                })
            }
        }, debounceMs); 

        return () => clearTimeout(timer);
    }, [localSearch, params, setParams, debounceMs]);

    // Debounce the search update to URL params
    useEffect(() => {
        setLocalSearch(params.search);
    }, [params.search]);

    const clearSearch = () => {
        setLocalSearch("");
        setParams({
            ...params,
            search: "",
            page: PAGINATION.DEFAULT_PAGE_NUMBER
        });
    };

    return {
        searchValue: localSearch,
        onSearchChange: setLocalSearch,
        clearSearch,
    };
}
